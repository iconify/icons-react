import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vro6cvbvc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vro6cvbvc"/>`,
		"fallback": "pinhead:taxi-and-arrow-right-above-arrow-left",
	});
}

export default Component;
