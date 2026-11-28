import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mg0ugob5a.css';
import '../../css/g/gcq-pnbnm.css';
import '../../css/m/mebfxw_io.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="mg0ugob5a"/><path class="gcq-pnbnm"/><path class="mebfxw_io"/></g>`,
		"fallback": "iconaut:lamp-ceiling",
	});
}

export default Component;
