import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/ecl9mibod.css';
import '../../css/i/ilwsnr6hs.css';
import '../../css/f/fz66djbqw.css';
import '../../css/m/m682pvtzs.css';
import '../../css/v/v99dv7jfe.css';
import '../../css/k/kgep8hbkr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ecl9mibod wm-shadow"/><path class="ilwsnr6hs"/><path class="fz66djbqw"/><path class="m682pvtzs"/><path class="v99dv7jfe"/><path class="kgep8hbkr"/></g>`,
		"fallback": "withicons-retro:shield-plus",
	});
}

export default Component;
