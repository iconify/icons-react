import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzlvgiczh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzlvgiczh"/>`,
		"fallback": "streamline-ultimate:radiology-scanner-bold",
	});
}

export default Component;
