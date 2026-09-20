import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jyf-hkbzb.css';
import '../../css/e/erzf03bmv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGuyku8X7A)"><path clip-rule="evenodd" class="jyf-hkbzb"/></g><defs><clipPath id="SVGuyku8X7A"><path class="erzf03bmv"/></clipPath></defs></g>`,
		"fallback": "ix:link-break",
	});
}

export default Component;
