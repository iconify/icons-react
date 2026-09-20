import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nr84sr1dz.css';
import '../../css/k/k9mmmbj9p.css';
import '../../css/j/j4zojfbvp.css';
import '../../css/f/fdek9y16b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nr84sr1dz"/><path class="k9mmmbj9p"/><path class="j4zojfbvp"/><path class="fdek9y16b"/></g>`,
		"fallback": "streamline-color:vr-headset-2",
	});
}

export default Component;
