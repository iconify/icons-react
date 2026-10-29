import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/h70n51bey.css';
import '../../css/i/ipglr0bez.css';
import '../../css/f/f26bn-hui.css';
import '../../css/y/ynmcfyb2o.css';
import '../../css/p/pxs307brl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="h70n51bey"/><path class="ipglr0bez"/><path class="f26bn-hui wm-a"/><path class="ynmcfyb2o"/><path class="pxs307brl"/></g>`,
		"fallback": "withicons:megaphone-duo",
	});
}

export default Component;
