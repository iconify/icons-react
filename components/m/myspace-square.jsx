import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uf9v5dfhb.css';
import '../../css/o/o1vr-2ost.css';
import '../../css/x/x3ibz2bfz.css';
import '../../css/x/xojntycxm.css';
import '../../css/p/pltokbbut.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><ellipse class="uf9v5dfhb"/><path class="o1vr-2ost"/><ellipse class="x3ibz2bfz"/><path class="xojntycxm"/><path class="pltokbbut"/></g>`,
		"fallback": "jam:myspace-square",
	});
}

export default Component;
