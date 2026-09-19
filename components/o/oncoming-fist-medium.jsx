import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kbu_e79xt.css';
import '../../css/m/m8bh_vb-g.css';
import '../../css/o/oul2otxis.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kbu_e79xt"/><path class="m8bh_vb-g"/><path class="oul2otxis"/></g>`,
		"fallback": "fluent-emoji-flat:oncoming-fist-medium",
	});
}

export default Component;
