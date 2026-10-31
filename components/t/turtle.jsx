import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/g/gmdem8k9r.css';
import '../../css/f/fnci_hfwk.css';
import '../../css/a/az_g72z-v.css';
import '../../css/s/so82hdmdc.css';
import '../../css/n/n9b8lg9mk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="gmdem8k9r wm-shadow"/><path class="fnci_hfwk"/><path class="az_g72z-v"/><path class="so82hdmdc"/><path class="n9b8lg9mk"/></g>`,
		"fallback": "withicons-retro:turtle",
	});
}

export default Component;
