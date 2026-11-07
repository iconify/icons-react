import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i4w_uybke.css';
import '../../css/w/wk2khdbwm.css';
import '../../css/f/fg8r_-gtr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i4w_uybke"/><path clip-rule="evenodd" class="wk2khdbwm"/><path class="fg8r_-gtr"/>`,
		"fallback": "solar:washing-machine-minimalistic-bold-duotone",
	});
}

export default Component;
