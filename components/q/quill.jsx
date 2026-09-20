import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hf-c07bjh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hf-c07bjh"/>`,
		"fallback": "mdi:quill",
	});
}

export default Component;
