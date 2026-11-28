import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/ajsjpob7d.css';
import '../../css/q/qgoj2cb0j.css';
import '../../css/c/c39cbgb9r.css';
import '../../css/s/saqz-qbft.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ajsjpob7d"/><path class="qgoj2cb0j"/><path class="c39cbgb9r"/><path class="saqz-qbft"/></g>`,
		"fallback": "iconaut:prompt",
	});
}

export default Component;
