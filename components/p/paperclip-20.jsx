import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dds28brcj.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dds28brcj"/>`,
		"fallback": "garden:paperclip-20",
	});
}

export default Component;
