import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/r76qbi3sf.css';
import '../../css/m/mfyqqqb4c.css';
import '../../css/n/n_30woblz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="r76qbi3sf"/><path class="mfyqqqb4c wm-k"/><path class="n_30woblz wm-a"/></g>`,
		"fallback": "withicons:tag-sketch",
	});
}

export default Component;
