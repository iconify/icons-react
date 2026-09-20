import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uwjkkbbqh.css';
import '../../css/l/ljed_-rtx.css';
import '../../css/b/bbjo3imxx.css';
import '../../css/y/yralhb_0f.css';
import '../../css/e/e70tku2ax.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uwjkkbbqh"/><path class="ljed_-rtx"/><path class="bbjo3imxx"/><path class="yralhb_0f"/><path class="e70tku2ax"/></g>`,
		"fallback": "streamline-cyber-color:wallet-cash",
	});
}

export default Component;
