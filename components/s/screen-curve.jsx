import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/voc__pi4j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="voc__pi4j"/>`,
		"fallback": "streamline:screen-curve",
	});
}

export default Component;
