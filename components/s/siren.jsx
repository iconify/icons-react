import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/h3fukeb1d.css';
import '../../css/k/k-q_svbze.css';
import '../../css/w/we_s5obos.css';
import '../../css/p/pm7q30a0l.css';
import '../../css/q/qocjvmb5o.css';
import '../../css/r/r5fd74b0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="h3fukeb1d wm-shadow"/><path class="k-q_svbze"/><path class="we_s5obos"/><path class="pm7q30a0l"/><path class="qocjvmb5o"/><path class="r5fd74b0r wm-s"/></g>`,
		"fallback": "withicons-retro:siren",
	});
}

export default Component;
