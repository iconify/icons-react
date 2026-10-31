import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/e/ebz3uhl4a.css';
import '../../css/t/tpe47wnjl.css';
import '../../css/l/lle4mmbpd.css';
import '../../css/j/jsqlct7ex.css';
import '../../css/y/y-6cydnyn.css';
import '../../css/h/hnr05jbfk.css';
import '../../css/c/c6nzmddiu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGrDAj0cnV" x1="9" x2="15" y1="3.5" y2="21.49" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGrDAj0cnV)" class="ebz3uhl4a"/><path class="tpe47wnjl wm-s"/><path class="lle4mmbpd wm-shine"/><path class="jsqlct7ex wm-shine"/><path class="wm-shine y-6cydnyn"/><path class="hnr05jbfk wm-shine"/><path class="c6nzmddiu wm-shine"/></g>`,
		"fallback": "withicons-utsav:mail-x",
	});
}

export default Component;
