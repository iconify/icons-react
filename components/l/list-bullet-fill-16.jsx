import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bn-fd_bpy.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nehzp4d4n.css';
import '../../css/o/o_45fb3ek.css';
import '../../css/g/g9ke79bbm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bn-fd_bpy"/><g class="cuyn6tgcc"><circle class="nehzp4d4n"/><circle class="o_45fb3ek"/><circle class="g9ke79bbm"/></g>`,
		"fallback": "garden:list-bullet-fill-16",
	});
}

export default Component;
