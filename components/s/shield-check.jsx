import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nawog-beq.css';
import '../../css/x/xdzdmwwnt.css';
import '../../css/s/s5qhm57se.css';
import '../../css/s/sx40hko8u.css';
import '../../css/w/wzs2ddcme.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nawog-beq wm-k"/><path class="wm-k xdzdmwwnt"/><path class="s5qhm57se wm-k"/><path class="sx40hko8u wm-shine"/><path class="wm-a wzs2ddcme"/></g>`,
		"fallback": "withicons-anime:shield-check",
	});
}

export default Component;
