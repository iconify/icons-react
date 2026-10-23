import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b4y8rg49z.css';
import '../../css/i/izz92k1yj.css';
import '../../css/o/orn-k1zwm.css';
import '../../css/y/y0iy5tb2a.css';
import '../../css/t/teslz7bcr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="b4y8rg49z"/><path class="izz92k1yj"/><path class="orn-k1zwm"/><path class="y0iy5tb2a"/><path class="teslz7bcr"/></g>`,
		"fallback": "andrsrxn:owl",
	});
}

export default Component;
