import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/s/s755496ey.css';
import '../../css/y/yf22sk9po.css';
import '../../css/f/f_kh3v_7r.css';
import '../../css/k/knwd84p9u.css';
import '../../css/m/mkxt1ktfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="s755496ey"/><path class="wm-shine yf22sk9po"/><path class="f_kh3v_7r wm-k"/><path class="knwd84p9u wm-a"/><path class="mkxt1ktfx wm-deco"/></g>`,
		"fallback": "withicons-kawaii:pencil",
	});
}

export default Component;
