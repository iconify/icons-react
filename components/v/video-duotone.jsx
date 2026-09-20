import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vvp3mvl2g.css';
import '../../css/z/zbfibgbbq.css';
import '../../css/x/xt1fr6buf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vvp3mvl2g"/><path class="zbfibgbbq"/><circle class="xt1fr6buf"/></g>`,
		"fallback": "lets-icons:video-duotone",
	});
}

export default Component;
