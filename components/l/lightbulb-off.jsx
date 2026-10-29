import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lz7b8hbhu.css';
import '../../css/p/pp783-bfu.css';
import '../../css/x/xhi7lwbjr.css';
import '../../css/m/m05pb6bif.css';
import '../../css/h/hi-zqrb4e.css';
import '../../css/x/x2ksgbc7x.css';
import '../../css/l/lx9ciwz-n.css';
import '../../css/t/t26xdyb-j.css';
import '../../css/m/mw7ctub8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><radialGradient id="SVGgVhrlcxD" cx="10" cy="7" r="12" gradientUnits="userSpaceOnUse"><stop offset="0" class="lz7b8hbhu"/><stop offset="1" class="pp783-bfu"/></radialGradient></defs><path class="wm-shadow xhi7lwbjr"/><path fill="url(#SVGgVhrlcxD)" class="m05pb6bif wm-k"/><path class="hi-zqrb4e wm-k"/><path class="wm-k x2ksgbc7x"/><path class="lx9ciwz-n wm-shine"/><path class="t26xdyb-j wm-s"/><path class="mw7ctub8u wm-s"/></g>`,
		"fallback": "withicons-halloween:lightbulb-off",
	});
}

export default Component;
