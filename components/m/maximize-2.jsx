import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7t_t8b-e.css';
import '../../css/h/h60_a5n8i.css';
import '../../css/q/q_l5s9b9z.css';
import '../../css/l/liogp8-7m.css';
import '../../css/t/ts-ap5-7s.css';
import '../../css/x/x61xssbet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t7t_t8b-e wm-shadow"/><path class="h60_a5n8i wm-k"/><path class="q_l5s9b9z wm-k"/><path class="liogp8-7m wm-k"/><path class="ts-ap5-7s wm-k"/><path class="wm-shine x61xssbet"/>`,
		"fallback": "withicons-pastel:maximize-2",
	});
}

export default Component;
