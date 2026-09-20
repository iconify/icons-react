import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ww373s-as.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ww373s-as"/>`,
		"fallback": "reicon:transaction-minus-filled",
	});
}

export default Component;
