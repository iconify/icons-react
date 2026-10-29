import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/d/dacsmr53v.css';
import '../../css/v/v1yazvbdk.css';
import '../../css/g/g2xclxbug.css';
import '../../css/m/m3y7qnb6b.css';
import '../../css/w/wkgkrdbxr.css';
import '../../css/u/uk5zfenqu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="dacsmr53v wm-deco"/><path class="v1yazvbdk wm-deco"/><path class="g2xclxbug wm-deco"/><path class="m3y7qnb6b wm-k"/><path class="wkgkrdbxr wm-a"/><path class="uk5zfenqu wm-k"/></g>`,
		"fallback": "withicons:mountain-snow-blueprint",
	});
}

export default Component;
