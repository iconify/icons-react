import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lj1mfwsdr.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lj1mfwsdr"/>`,
		"fallback": "streamline-flex-color:pdf-reader-application-flat",
	});
}

export default Component;
