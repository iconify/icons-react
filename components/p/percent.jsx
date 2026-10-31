import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/r/rpjbnzqvy.css';
import '../../css/v/vjz4sbbcu.css';
import '../../css/l/lxvwh2ban.css';
import '../../css/w/wzn9d1bad.css';
import '../../css/e/e-y4_x8ee.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="rpjbnzqvy wm-shadow"/><path class="vjz4sbbcu"/><path class="lxvwh2ban"/><path class="wzn9d1bad"/><path class="e-y4_x8ee"/></g>`,
		"fallback": "withicons-retro:percent",
	});
}

export default Component;
