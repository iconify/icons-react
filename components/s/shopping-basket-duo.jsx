import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_subqlkt.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q7qjpn1lr.css';
import '../../css/i/ipklc-bwj.css';
import '../../css/k/kmkz_xy3r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n_subqlkt secondary"/><g class="dt0cm9dhy primary"><path class="q7qjpn1lr"/><path class="ipklc-bwj"/><path class="kmkz_xy3r"/></g>`,
		"fallback": "iconaut:shopping-basket-duo",
	});
}

export default Component;
