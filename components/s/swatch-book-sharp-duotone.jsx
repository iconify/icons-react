import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/c/c_p5py6nk.css';
import '../../css/o/oxc64zbus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="c_p5py6nk"/><path clip-rule="evenodd" class="oxc64zbus"/></g>`,
		"fallback": "keyline-icons:swatch-book-sharp-duotone",
	});
}

export default Component;
