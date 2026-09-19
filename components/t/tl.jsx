import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bmggirfyq.css';
import '../../css/d/d-5fc0ryw.css';
import '../../css/o/o-cne-k-k.css';
import '../../css/e/ehn2nbutb.css';

const viewBox = {"width":300,"height":150};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bmggirfyq"/><path class="d-5fc0ryw"/><path class="o-cne-k-k"/><path class="ehn2nbutb"/></g>`,
		"fallback": "cif:tl",
	});
}

export default Component;
