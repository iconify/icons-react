import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c9829zbae.css';
import '../../css/w/w2z25bodf.css';
import '../../css/z/zhr3beibw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c9829zbae"/><path class="w2z25bodf"/><path class="zhr3beibw"/></g>`,
		"fallback": "andrsrxn:projector",
	});
}

export default Component;
