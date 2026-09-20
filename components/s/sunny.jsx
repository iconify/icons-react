import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kf0_gw6sp.css';
import '../../css/h/hubjnzbmt.css';
import '../../css/q/q0upm5byi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kf0_gw6sp"/><path class="hubjnzbmt"/><path class="q0upm5byi"/></g>`,
		"fallback": "tdesign:sunny",
	});
}

export default Component;
