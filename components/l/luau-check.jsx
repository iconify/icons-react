import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s53vmbcgz.css';
import '../../css/s/ss6--sbpb.css';
import '../../css/d/d_hbrvb-g.css';
import '../../css/f/fazon-bzg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s53vmbcgz"><path class="ss6--sbpb"/><path class="d_hbrvb-g"/><path class="fazon-bzg"/></g>`,
		"fallback": "catppuccin:luau-check",
	});
}

export default Component;
