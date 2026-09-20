import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u_tkij20l.css';
import '../../css/x/x90s9sbvg.css';
import '../../css/q/qr6e_mnfo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u_tkij20l"/><path clip-rule="evenodd" class="x90s9sbvg"/><path class="qr6e_mnfo"/></g>`,
		"fallback": "reicon:siren2",
	});
}

export default Component;
