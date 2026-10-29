import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/w/w7qymhfop.css';
import '../../css/f/f-cgamvit.css';
import '../../css/s/sz_rsbcxf.css';
import '../../css/m/mxl60llyt.css';
import '../../css/n/n_kan2bin.css';
import '../../css/p/pjglwlb-a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="w7qymhfop wm-deco"/><path class="f-cgamvit wm-deco"/><path class="sz_rsbcxf wm-k"/><path class="mxl60llyt wm-a"/><path class="n_kan2bin wm-s"/><path class="pjglwlb-a wm-s"/></g>`,
		"fallback": "withicons:mistletoe-blueprint",
	});
}

export default Component;
