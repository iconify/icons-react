import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e101s5r6a.css';
import '../../css/q/qcwdnbbyu.css';
import '../../css/n/n8foidhcv.css';

const viewBox = {"width":720,"height":720};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="e101s5r6a"/><g clip-path="url(#SVGugIPLcHS)"><path class="qcwdnbbyu"/></g><defs><clipPath id="SVGugIPLcHS"><path class="n8foidhcv"/></clipPath></defs></g>`,
		"fallback": "thesvg-color:pipedrive",
	});
}

export default Component;
