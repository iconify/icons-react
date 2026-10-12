import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s31bbjq4l.css';
import '../../css/f/ffsrxocry.css';
import '../../css/a/a-qr3fefb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s31bbjq4l"/><path class="ffsrxocry"/><path class="a-qr3fefb"/></g>`,
		"fallback": "lucide-extended:tube-lotion-duotone",
	});
}

export default Component;
