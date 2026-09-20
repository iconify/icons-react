import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wa76ilzqy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wa76ilzqy"/>`,
		"fallback": "streamline:interface-arrows-button-down-arrow-down-keyboard",
	});
}

export default Component;
