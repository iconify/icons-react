import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/q/qc7srqbbo.css';
import '../../css/i/ijcs4ts0b.css';
import '../../css/v/vk2mc_b_e.css';
import '../../css/r/rkwckacff.css';
import '../../css/b/byapvwb_p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><rect transform="rotate(45 24.762 3.243)" class="qc7srqbbo"/><path class="ijcs4ts0b"/><path class="vk2mc_b_e"/><path class="rkwckacff"/><path class="byapvwb_p"/></g>`,
		"fallback": "icon-park:tray",
	});
}

export default Component;
