import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogmcd4tny.css';
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
		"content": `<path class="ogmcd4tny secondary"/><g class="dt0cm9dhy primary"><path class="ajsjpob7d"/><path class="qgoj2cb0j"/><path class="c39cbgb9r"/><path class="saqz-qbft"/></g>`,
		"fallback": "iconaut:prompt-duo",
	});
}

export default Component;
