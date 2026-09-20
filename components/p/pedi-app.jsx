import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xaxo1ib7v.css';
import '../../css/m/mdxgoebbo.css';

const viewBox = {"width":228,"height":228};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGjQSJVcMA)"><path class="xaxo1ib7v"/></g><defs><clipPath id="SVGjQSJVcMA"><path class="mdxgoebbo"/></clipPath></defs></g>`,
		"fallback": "thesvg-color:pedi-app",
	});
}

export default Component;
