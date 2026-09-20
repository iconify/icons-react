import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ilfwa6ghy.css';
import '../../css/p/p56lewgoe.css';
import '../../css/t/t5n_crbii.css';

const viewBox = {"width":131,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVG3LbICbVO)"><path class="ilfwa6ghy"/><path class="p56lewgoe"/></g><defs><clipPath id="SVG3LbICbVO"><rect class="t5n_crbii"/></clipPath></defs></g>`,
		"fallback": "thesvg-color:tooljet",
	});
}

export default Component;
