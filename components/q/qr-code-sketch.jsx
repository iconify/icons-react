import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/nw6ewlb9m.css';
import '../../css/g/g6sfxjjaf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="nw6ewlb9m wm-k"/><path class="g6sfxjjaf wm-a"/></g>`,
		"fallback": "withicons:qr-code-sketch",
	});
}

export default Component;
