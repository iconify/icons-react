import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wjqhxab0j.css';
import '../../css/v/vr04v14eo.css';
import '../../css/g/gootj1b_k.css';
import '../../css/r/rrk2cbc3a.css';
import '../../css/t/tp4is0bfc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wjqhxab0j"/><path class="vr04v14eo"/><rect class="gootj1b_k"/><path class="rrk2cbc3a"/><path class="tp4is0bfc"/></g>`,
		"fallback": "icon-park:sound-one",
	});
}

export default Component;
