import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yjnn37b9t.css';
import '../../css/u/u9t7v_b5z.css';
import '../../css/j/jhkjxkb7c.css';
import '../../css/m/mrycl0qll.css';
import '../../css/f/f0cab1axs.css';
import '../../css/e/ewxgrvb_t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yjnn37b9t"/><path class="u9t7v_b5z"/><path class="jhkjxkb7c"/><path class="mrycl0qll"/><path class="f0cab1axs"/><path class="ewxgrvb_t"/></g>`,
		"fallback": "streamline-kameleon-color:wallet",
	});
}

export default Component;
