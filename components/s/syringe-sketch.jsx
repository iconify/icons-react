import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/w2mn3losm.css';
import '../../css/s/skq03ibah.css';
import '../../css/l/l1i4c7ymy.css';
import '../../css/e/elu64db-k.css';
import '../../css/h/h38x_m0_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="w2mn3losm"/><path class="skq03ibah wm-k"/><path class="l1i4c7ymy wm-a"/><path class="elu64db-k wm-k"/><path class="h38x_m0_y wm-a"/></g>`,
		"fallback": "withicons:syringe-sketch",
	});
}

export default Component;
