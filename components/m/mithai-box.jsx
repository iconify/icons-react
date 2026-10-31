import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/lx0hmmb6h.css';
import '../../css/o/ou_3i7b_k.css';
import '../../css/l/lzv070wxo.css';
import '../../css/r/rp3h3sb9m.css';
import '../../css/h/hzx976b_d.css';
import '../../css/v/vjtv2glaa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="lx0hmmb6h wm-shadow"/><path class="ou_3i7b_k"/><path class="lzv070wxo"/><path class="rp3h3sb9m"/><path class="hzx976b_d"/><path class="vjtv2glaa"/></g>`,
		"fallback": "withicons-retro:mithai-box",
	});
}

export default Component;
