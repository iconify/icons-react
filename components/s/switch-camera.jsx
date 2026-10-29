import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n06y1wnhz.css';
import '../../css/x/x_i0zm3ic.css';
import '../../css/f/f29zoab0l.css';
import '../../css/d/dwfppf1uy.css';
import '../../css/x/x8fpshbgp.css';
import '../../css/g/ghwfaz9ci.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n06y1wnhz wm-k"/><path class="wm-k x_i0zm3ic"/><path class="f29zoab0l wm-k"/><path class="dwfppf1uy wm-k"/><path class="wm-shine x8fpshbgp"/><path class="ghwfaz9ci wm-a"/></g>`,
		"fallback": "withicons-anime:switch-camera",
	});
}

export default Component;
