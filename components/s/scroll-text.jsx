import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w5v-28hwz.css';
import '../../css/k/k_fnqcbfy.css';
import '../../css/s/s_d5lc1ez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w5v-28hwz wm-k"/><path class="k_fnqcbfy wm-shine"/><path class="s_d5lc1ez wm-shine"/></g>`,
		"fallback": "withicons-lunar:scroll-text",
	});
}

export default Component;
