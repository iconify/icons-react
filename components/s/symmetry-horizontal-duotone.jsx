import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lx4hgk1or.css';
import '../../css/d/d164gdcfm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lx4hgk1or secondary"/><path class="d164gdcfm primary"/></g>`,
		"fallback": "iconaut:symmetry-horizontal-duotone",
	});
}

export default Component;
