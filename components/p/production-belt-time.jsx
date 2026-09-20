import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/q/qa1eh1bui.css';
import '../../css/z/zirvt1tna.css';
import '../../css/l/ltgv4aczb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="qa1eh1bui"/><path class="zirvt1tna"/><path class="ltgv4aczb"/></g>`,
		"fallback": "streamline-flex:production-belt-time",
	});
}

export default Component;
