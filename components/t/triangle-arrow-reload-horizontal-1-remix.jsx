import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yp3zy8coe.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yp3zy8coe"/>`,
		"fallback": "streamline:triangle-arrow-reload-horizontal-1-remix",
	});
}

export default Component;
