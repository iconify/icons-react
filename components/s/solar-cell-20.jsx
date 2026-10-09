import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eagfqob-p.css';
import '../../css/h/hx_d8fz_e.css';
import '../../css/c/cbwvap00w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eagfqob-p"/><path class="hx_d8fz_e"/><path class="cbwvap00w"/>`,
		"fallback": "energy-icons:solar-cell-20",
	});
}

export default Component;
