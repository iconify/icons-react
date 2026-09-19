import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/egapqxbpj.css';
import '../../css/u/ulx9yvgaq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="egapqxbpj"/><path class="ulx9yvgaq"/></g>`,
		"fallback": "fluent-emoji-flat:stop-sign",
	});
}

export default Component;
