import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/c/chm41kb4l.css';
import '../../css/e/euahgmvxc.css';
import '../../css/i/i5zuhnc6j.css';
import '../../css/z/zb6mz35nb.css';
import '../../css/i/i49wp7b0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="chm41kb4l"/><path class="euahgmvxc wm-shine"/><path class="i5zuhnc6j wm-k"/><path class="wm-a zb6mz35nb"/><path class="i49wp7b0m wm-deco"/></g>`,
		"fallback": "withicons-kawaii:vr-headset",
	});
}

export default Component;
