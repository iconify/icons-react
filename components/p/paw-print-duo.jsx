import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lwyc_175p.css';
import '../../css/d/dhiqbqpfx.css';
import '../../css/e/eqaz9db1b.css';
import '../../css/o/ozvu4bk6l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="lwyc_175p"/><path class="dhiqbqpfx wm-a"/><path class="eqaz9db1b"/><path class="ozvu4bk6l wm-a"/></g>`,
		"fallback": "withicons:paw-print-duo",
	});
}

export default Component;
