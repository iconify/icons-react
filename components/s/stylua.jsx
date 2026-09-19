import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/winuw9mpr.css';
import '../../css/y/y6acru97n.css';
import '../../css/s/sipithbeq.css';
import '../../css/o/oh2-fep-p.css';
import '../../css/y/yvlepzcrj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="winuw9mpr"/><path class="y6acru97n"/><path class="sipithbeq"/><path class="oh2-fep-p"/><path class="yvlepzcrj"/>`,
		"fallback": "catppuccin:stylua",
	});
}

export default Component;
