import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/azo1x_mpi.css';
import '../../css/y/yil20kbin.css';
import '../../css/a/apptkdboz.css';
import '../../css/l/la6s5wbjd.css';
import '../../css/l/lwu0iv-js.css';
import '../../css/y/y9seu5btc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="azo1x_mpi"/><path class="yil20kbin"/><path class="apptkdboz"/><path class="la6s5wbjd"/><path class="lwu0iv-js"/><path class="y9seu5btc"/></g>`,
		"fallback": "iconaut:panda",
	});
}

export default Component;
