import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nd-3gubon.css';
import '../../css/t/tb_maib5c.css';
import '../../css/d/dz1ggsbih.css';
import '../../css/u/u8gkuv4uz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="nd-3gubon"/><path class="tb_maib5c"/><path class="dz1ggsbih"/><path class="u8gkuv4uz"/></g>`,
		"fallback": "solar:stopwatch-pause-line-duotone",
	});
}

export default Component;
