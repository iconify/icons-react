import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ckv1mmfoq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ckv1mmfoq"/>`,
		"fallback": "reicon:more-square3-filled",
	});
}

export default Component;
