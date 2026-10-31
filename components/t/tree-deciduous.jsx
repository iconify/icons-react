import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/x/xz6hfacqi.css';
import '../../css/g/g8e5mubiu.css';
import '../../css/m/mcy-2yrno.css';
import '../../css/o/ovp7dlb_x.css';
import '../../css/w/wb3c7x6fa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="xz6hfacqi"/><path class="g8e5mubiu wm-shine"/><path class="mcy-2yrno wm-k"/><path class="ovp7dlb_x wm-a"/><path class="wb3c7x6fa wm-deco"/></g>`,
		"fallback": "withicons-kawaii:tree-deciduous",
	});
}

export default Component;
