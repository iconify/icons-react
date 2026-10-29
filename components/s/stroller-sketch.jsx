import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/fq86o7b2w.css';
import '../../css/j/jmuo_s_vz.css';
import '../../css/g/g-umi1ukx.css';
import '../../css/o/oo-rikb_c.css';
import '../../css/f/f4hkvbbqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="fq86o7b2w"/><path class="jmuo_s_vz wm-k"/><path class="g-umi1ukx wm-a"/><path class="oo-rikb_c wm-k"/><path class="f4hkvbbqi wm-a"/></g>`,
		"fallback": "withicons:stroller-sketch",
	});
}

export default Component;
