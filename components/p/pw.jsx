import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lj1b5bc8e.css';
import '../../css/p/pr7jl7ryw.css';

const viewBox = {"width":301,"height":189};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lj1b5bc8e"/><circle class="pr7jl7ryw"/></g>`,
		"fallback": "cif:pw",
	});
}

export default Component;
