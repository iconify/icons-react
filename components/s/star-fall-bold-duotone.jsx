import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cg_tc_thn.css';
import '../../css/l/lvbigfbsb.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/z/z29w3hbal.css';
import '../../css/s/sbj_083-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cg_tc_thn"/><path class="lvbigfbsb"/><g class="xtpeb-edw"><path class="z29w3hbal"/><path class="sbj_083-e"/></g>`,
		"fallback": "solar:star-fall-bold-duotone",
	});
}

export default Component;
