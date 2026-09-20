import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r8-2tuzad.css';
import '../../css/y/ygox79bep.css';
import '../../css/e/e7x9otzxy.css';
import '../../css/r/rcbqswbul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r8-2tuzad"/><circle class="ygox79bep"/><path class="e7x9otzxy"/><path class="rcbqswbul"/></g>`,
		"fallback": "lets-icons:unlock-duotone",
	});
}

export default Component;
