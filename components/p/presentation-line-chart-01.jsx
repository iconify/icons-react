import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hug9b6uqn.css';
import '../../css/g/g-2yoqbsw.css';
import '../../css/k/kyhrmps2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="hug9b6uqn"/><path class="g-2yoqbsw"/><path class="kyhrmps2k"/></g>`,
		"fallback": "hugeicons:presentation-line-chart-01",
	});
}

export default Component;
