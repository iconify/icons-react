import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wcdchccgf.css';
import '../../css/t/tgl67pb8o.css';
import '../../css/a/a_wq3zl0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="wcdchccgf"/><circle class="tgl67pb8o"/><circle class="a_wq3zl0j"/></g>`,
		"fallback": "iconaut:percent",
	});
}

export default Component;
