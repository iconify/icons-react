import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/js5fj-07l.css';
import '../../css/f/f9q19ybhs.css';
import '../../css/w/w-zx9_bof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="js5fj-07l"/><path class="f9q19ybhs"/><path class="w-zx9_bof"/></g>`,
		"fallback": "si:key-duotone",
	});
}

export default Component;
