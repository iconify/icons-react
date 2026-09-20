import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozl9xma8q.css';
import '../../css/e/edpva5b2a.css';
import '../../css/j/jllgacczv.css';
import '../../css/j/jni02w_ej.css';
import '../../css/g/gi7p4lblz.css';
import '../../css/n/nn-yeicay.css';

const viewBox = {"width":150,"height":150};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><clipPath id="SVGU3pdo2XM"><path class="ozl9xma8q"/></clipPath><clipPath id="SVGZq8XkcJH"><path class="edpva5b2a"/></clipPath><clipPath id="SVG5K3Iqdnk"><path class="jllgacczv"/></clipPath></defs><g clip-path="url(#SVGU3pdo2XM)"><path class="jni02w_ej"/></g><g clip-path="url(#SVGZq8XkcJH)"><path class="gi7p4lblz"/></g><g clip-path="url(#SVG5K3Iqdnk)"><path class="nn-yeicay"/></g>`,
		"fallback": "thesvg-color:nusantara",
	});
}

export default Component;
