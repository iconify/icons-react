import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zy8m0sbcq.css';
import '../../css/e/etynb-byp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="zy8m0sbcq"/><path class="etynb-byp"/>`,
		"fallback": "selfhst:linkding",
	});
}

export default Component;
