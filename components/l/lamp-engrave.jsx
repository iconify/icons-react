import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/unez3en8j.css';
import '../../css/n/nvv_c9j-h.css';
import '../../css/a/anw3ijuct.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="unez3en8j"/><path class="nvv_c9j-h wm-shadow"/><path class="anw3ijuct"/></g>`,
		"fallback": "withicons:lamp-engrave",
	});
}

export default Component;
