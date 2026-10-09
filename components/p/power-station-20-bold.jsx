import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tyz6g2bdx.css';
import '../../css/f/fad7f9tkf.css';
import '../../css/w/wmo2g_b9v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tyz6g2bdx"/><path class="fad7f9tkf"/><path class="wmo2g_b9v"/>`,
		"fallback": "energy-icons:power-station-20-bold",
	});
}

export default Component;
