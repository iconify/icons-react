import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fnhxzpenq.css';
import '../../css/i/io_cxm4pf.css';
import '../../css/o/oi53gdbcm.css';
import '../../css/k/ktw9j5b_s.css';
import '../../css/n/nhg7a_bkf.css';
import '../../css/g/gahn8dbzy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fnhxzpenq"/><path class="io_cxm4pf"/><path class="oi53gdbcm"/><path class="ktw9j5b_s"/><path class="nhg7a_bkf"/><path class="gahn8dbzy"/></g>`,
		"fallback": "streamline-cyber-color:pickup-truck",
	});
}

export default Component;
