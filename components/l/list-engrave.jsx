import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/g6gf1kiut.css';
import '../../css/q/qia-1etpx.css';
import '../../css/l/lt97xvblj.css';
import '../../css/b/bov66nrpl.css';
import '../../css/h/hfi5e-rtf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="g6gf1kiut wm-k"/><path class="qia-1etpx wm-a"/><path class="lt97xvblj wm-shadow"/><path class="bov66nrpl wm-k"/><path class="hfi5e-rtf wm-a"/></g>`,
		"fallback": "withicons:list-engrave",
	});
}

export default Component;
