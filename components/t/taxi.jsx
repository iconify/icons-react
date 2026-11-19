import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dcvl96buf.css';
import '../../css/p/pb1z62j3d.css';
import '../../css/c/cuim9ybqv.css';
import '../../css/x/xrh7xacua.css';
import '../../css/z/zzt0d4bku.css';
import '../../css/c/c90c0jbtb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dcvl96buf"/><path class="pb1z62j3d"/><path class="cuim9ybqv"/><circle class="xrh7xacua"/><circle class="zzt0d4bku"/><path class="c90c0jbtb"/></g>`,
		"fallback": "andrsrxn:taxi",
	});
}

export default Component;
