import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/l/l5i5hyb3b.css';
import '../../css/o/ozd_fxwmk.css';
import '../../css/k/k6cs5ab0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="shu3xdl9q"/><path class="l5i5hyb3b"/><path class="ozd_fxwmk"/><path class="k6cs5ab0y"/></g>`,
		"fallback": "iconoir:refresh-circular",
	});
}

export default Component;
