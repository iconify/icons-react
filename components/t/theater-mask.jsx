import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kpix4o4kv.css';
import '../../css/q/qupfyq3om.css';
import '../../css/g/gqwz-j0vh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="kpix4o4kv"/><path class="qupfyq3om"/><path class="gqwz-j0vh"/></g>`,
		"fallback": "streamline-sharp:theater-mask",
	});
}

export default Component;
