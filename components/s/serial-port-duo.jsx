import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/auber6bih.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/a2k0rfjkc.css';
import '../../css/v/v4y9w4i-b.css';
import '../../css/x/x-89fq5bh.css';
import '../../css/j/j1yi5dnnd.css';
import '../../css/m/mah05kb2x.css';
import '../../css/u/uie_7acsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="auber6bih secondary"/><g class="dt0cm9dhy primary"><path class="a2k0rfjkc"/><path class="v4y9w4i-b"/><path class="x-89fq5bh"/><path class="j1yi5dnnd"/><path class="mah05kb2x"/><path class="uie_7acsf"/></g>`,
		"fallback": "iconaut:serial-port-duo",
	});
}

export default Component;
