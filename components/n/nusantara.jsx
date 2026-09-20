import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozl9xma8q.css';
import '../../css/e/edpva5b2a.css';
import '../../css/j/jllgacczv.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jw85-fbse.css';
import '../../css/s/slt45ab8s.css';
import '../../css/g/go6vepb7s.css';

const viewBox = {"width":150,"height":150};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><clipPath id="SVGU3pdo2XM"><path class="ozl9xma8q"/></clipPath><clipPath id="SVGZq8XkcJH"><path class="edpva5b2a"/></clipPath><clipPath id="SVG5K3Iqdnk"><path class="jllgacczv"/></clipPath></defs><g class="cuyn6tgcc"><g clip-path="url(#SVGU3pdo2XM)"><path class="jw85-fbse"/></g><g clip-path="url(#SVGZq8XkcJH)"><path class="slt45ab8s"/></g><g clip-path="url(#SVG5K3Iqdnk)"><path class="go6vepb7s"/></g></g>`,
		"fallback": "thesvg:nusantara",
	});
}

export default Component;
