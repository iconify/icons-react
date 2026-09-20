import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/exo9z_3pw.css';
import '../../css/i/iegx5_a4f.css';
import '../../css/g/g5piw_hje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="exo9z_3pw"/><path class="iegx5_a4f"/><path class="g5piw_hje"/></g>`,
		"fallback": "streamline-ultimate:truck-2",
	});
}

export default Component;
