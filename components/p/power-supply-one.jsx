import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/s/sotf17t_r.css';
import '../../css/e/e7qxnab6p.css';
import '../../css/g/gngyfac2q.css';
import '../../css/t/tbwpbq8rj.css';
import '../../css/v/vk2mc_b_e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="sotf17t_r"/><path class="e7qxnab6p"/><path class="gngyfac2q"/><path class="tbwpbq8rj"/><path class="vk2mc_b_e"/></g>`,
		"fallback": "icon-park:power-supply-one",
	});
}

export default Component;
