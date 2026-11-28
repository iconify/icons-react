import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/pzxc_4bsf.css';
import '../../css/c/cehc4fp0p.css';
import '../../css/d/d0jwgjpuu.css';
import '../../css/k/kt5dpkb2a.css';
import '../../css/m/ma71cib5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="pzxc_4bsf"/><path class="cehc4fp0p"/><path class="d0jwgjpuu"/><path class="kt5dpkb2a"/><path class="ma71cib5d"/></g>`,
		"fallback": "iconaut:vector-corner",
	});
}

export default Component;
