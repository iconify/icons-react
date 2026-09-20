import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vd1a8cc_d.css';
import '../../css/g/gj71clgna.css';
import '../../css/c/cnluap8bd.css';
import '../../css/j/jv2w38b2s.css';
import '../../css/t/typmwndig.css';
import '../../css/y/yby0c6bqm.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/b/byj-9tbmv.css';
import '../../css/o/ourq94bou.css';
import '../../css/g/g-_hfi7eo.css';
import '../../css/y/yg4410k_y.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vd1a8cc_d"/><path class="gj71clgna"/><path class="cnluap8bd"/><path class="jv2w38b2s"/><path class="typmwndig"/><path class="yby0c6bqm"/><g class="ij2x_72vy"><path class="byj-9tbmv"/><path class="ourq94bou"/><path class="g-_hfi7eo"/><path class="yg4410k_y"/></g>`,
		"fallback": "openmoji:japanese-castle",
	});
}

export default Component;
