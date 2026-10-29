import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m6ydidbar.css';
import '../../css/n/nl_vr_blc.css';
import '../../css/g/girn8nzkm.css';
import '../../css/r/rae2v2bhr.css';
import '../../css/p/ppj1z697t.css';
import '../../css/p/p5-xinj4c.css';
import '../../css/j/jlhmd_2wp.css';
import '../../css/q/q_h4ogb3x.css';
import '../../css/x/xq2oszwyc.css';
import '../../css/z/z8wvzr7-y.css';
import '../../css/w/w72t34ppa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m6ydidbar wm-shadow"/><path class="nl_vr_blc wm-k"/><path class="girn8nzkm wm-k"/><path class="rae2v2bhr wm-k"/><path class="ppj1z697t wm-k"/><path class="p5-xinj4c wm-shine"/><path class="jlhmd_2wp wm-k"/><path class="q_h4ogb3x wm-k"/><path class="wm-k xq2oszwyc"/><path class="wm-k z8wvzr7-y"/><path class="w72t34ppa wm-a"/>`,
		"fallback": "withicons-plush:projector",
	});
}

export default Component;
