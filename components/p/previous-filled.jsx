import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjo5k1bnr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yjo5k1bnr"/>`,
		"fallback": "reicon:previous-filled",
	});
}

export default Component;
