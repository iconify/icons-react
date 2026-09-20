import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/so7t1th0o.css';
import '../../css/n/nuz9zpbsf.css';
import '../../css/u/uahmt8bhp.css';
import '../../css/x/xw86ke2ev.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="so7t1th0o"/><path class="nuz9zpbsf"/><path class="uahmt8bhp"/><path class="xw86ke2ev"/></g>`,
		"fallback": "streamline-ultimate-color:navigation-menu-horizontal-1",
	});
}

export default Component;
