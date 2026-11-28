import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_ahlubpw.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zrjey1bzk.css';
import '../../css/h/hv2uvbznp.css';
import '../../css/n/n4_kssl7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary u_ahlubpw"/><g class="dt0cm9dhy primary"><path class="zrjey1bzk"/><path class="hv2uvbznp"/><path class="n4_kssl7m"/></g>`,
		"fallback": "iconaut:semicolon-duo",
	});
}

export default Component;
