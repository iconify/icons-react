import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/qvvkxkbcb.css';
import '../../css/s/szmghdbuf.css';
import '../../css/c/cuwghopiv.css';
import '../../css/q/q-90hqaaz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="qvvkxkbcb"/><path class="szmghdbuf wm-a"/><path class="cuwghopiv wm-k"/><path class="q-90hqaaz wm-a"/></g>`,
		"fallback": "withicons:square-plus-sketch",
	});
}

export default Component;
