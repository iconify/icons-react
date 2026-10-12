import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dz5hr8fgm.css';
import '../../css/f/fpuyb9bst.css';
import '../../css/k/kyjuf4b-f.css';
import '../../css/t/tm2iryaal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect transform="rotate(90 0 21.58)scale(-1 1)" class="dz5hr8fgm"/><rect transform="rotate(90 0 21.58)scale(-1 1)" class="fpuyb9bst"/><path class="kyjuf4b-f"/><path class="tm2iryaal"/></g>`,
		"fallback": "andrsrxn:three-square",
	});
}

export default Component;
