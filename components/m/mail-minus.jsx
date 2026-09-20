import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/huhyvzy8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="huhyvzy8m"/>`,
		"fallback": "keyline-icons:mail-minus",
	});
}

export default Component;
