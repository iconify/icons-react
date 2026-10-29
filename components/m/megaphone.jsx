import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/ynmcfyb2o.css';
import '../../css/p/pxs307brl.css';
import '../../css/f/f26bn-hui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ynmcfyb2o"/><path class="pxs307brl"/><path class="f26bn-hui wm-a"/></g>`,
		"fallback": "withicons:megaphone",
	});
}

export default Component;
