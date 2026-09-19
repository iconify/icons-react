import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/k0lno9bgx.css';
import '../../css/w/wzx-5xvic.css';
import '../../css/q/qk3kdsbng.css';
import '../../css/p/pzlrmg6rc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><ellipse class="k0lno9bgx"/><path class="wzx-5xvic"/><path class="qk3kdsbng"/><path class="pzlrmg6rc"/></g>`,
		"fallback": "hugeicons:oil-barrel",
	});
}

export default Component;
