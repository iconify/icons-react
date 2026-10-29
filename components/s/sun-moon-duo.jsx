import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/sbrvwfb0g.css';
import '../../css/q/q08n-4bjs.css';
import '../../css/b/btlgwpbsn.css';
import '../../css/z/z6q0xzsvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="sbrvwfb0g"/><path class="q08n-4bjs wm-a"/><path class="btlgwpbsn"/><path class="z6q0xzsvv"/></g>`,
		"fallback": "withicons:sun-moon-duo",
	});
}

export default Component;
