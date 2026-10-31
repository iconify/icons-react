import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/x/xe65wvb-d.css';
import '../../css/j/j3c_s-bua.css';
import '../../css/y/yuobg4bux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="wm-k xe65wvb-d"/><path class="j3c_s-bua wm-s"/><path class="wm-deco yuobg4bux"/></g>`,
		"fallback": "withicons-kawaii:list-x",
	});
}

export default Component;
