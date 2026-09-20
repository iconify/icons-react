import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z6urhobix.css';
import '../../css/f/fu9c_kh2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="z6urhobix"/><path class="fu9c_kh2m"/></g>`,
		"fallback": "si:user-alt-3-duotone",
	});
}

export default Component;
