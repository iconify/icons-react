import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/es5m-8btd.css';
import '../../css/d/d3pnbn4xy.css';
import '../../css/c/ch1shxbag.css';
import '../../css/t/t_rubviit.css';
import '../../css/w/wislszbwk.css';
import '../../css/f/f0swzwbvy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="es5m-8btd"/><path class="d3pnbn4xy"/><path class="ch1shxbag"/><path class="t_rubviit"/><path class="wislszbwk"/><path class="f0swzwbvy"/></g>`,
		"fallback": "streamline-ultimate-color:movies-reel",
	});
}

export default Component;
