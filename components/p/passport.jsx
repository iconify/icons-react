import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/q/qi_53e5zc.css';
import '../../css/k/k-gnfab9e.css';
import '../../css/f/fsdbgue9o.css';
import '../../css/b/bgwyi3pfa.css';
import '../../css/c/ceumm1hvf.css';
import '../../css/q/qwbh14bjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="qi_53e5zc wm-shadow"/><path class="k-gnfab9e"/><path class="fsdbgue9o"/><path class="bgwyi3pfa"/><path class="ceumm1hvf wm-shine"/><path class="qwbh14bjt wm-deco"/></g>`,
		"fallback": "withicons-sticker:passport",
	});
}

export default Component;
