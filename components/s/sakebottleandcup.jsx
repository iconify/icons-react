import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmeesubxi.css';
import '../../css/l/l08ji0b1b.css';
import '../../css/q/q8whoub3o.css';
import '../../css/b/bi6rp_ibq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rmeesubxi"/><path class="l08ji0b1b"/><path class="q8whoub3o"/><path class="bi6rp_ibq"/>`,
		"fallback": "fxemoji:sakebottleandcup",
	});
}

export default Component;
