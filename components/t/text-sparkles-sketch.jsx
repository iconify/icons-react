import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/v7cfz7b0r.css';
import '../../css/o/obtvy0npp.css';
import '../../css/n/nqxmswb2p.css';
import '../../css/g/g3x_gdb2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="v7cfz7b0r wm-k"/><path class="obtvy0npp wm-s"/><path class="nqxmswb2p wm-k"/><path class="g3x_gdb2f wm-s"/></g>`,
		"fallback": "withicons:text-sparkles-sketch",
	});
}

export default Component;
