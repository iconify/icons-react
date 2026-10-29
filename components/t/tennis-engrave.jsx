import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/uoxth4t8w.css';
import '../../css/o/ogeuw0bqm.css';
import '../../css/a/ax1-ht12b.css';
import '../../css/n/nnixupllg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="uoxth4t8w"/><path class="ogeuw0bqm wm-shadow"/><path class="ax1-ht12b"/><path class="nnixupllg"/></g>`,
		"fallback": "withicons:tennis-engrave",
	});
}

export default Component;
