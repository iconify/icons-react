import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gqgpgqbpb.css';
import '../../css/w/welizokqk.css';
import '../../css/y/ygox79bep.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gqgpgqbpb"/><path class="welizokqk"/><circle class="ygox79bep"/></g>`,
		"fallback": "lets-icons:lock-duotone-line",
	});
}

export default Component;
