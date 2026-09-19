import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/i9h5kyu-u.css';
import '../../css/s/sk3vq-k_v.css';
import '../../css/o/orme_1nml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="i9h5kyu-u"/><path class="sk3vq-k_v"/><path class="orme_1nml"/></g>`,
		"fallback": "hugeicons:presentation-01",
	});
}

export default Component;
