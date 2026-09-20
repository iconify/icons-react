import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/ky3doeivt.css';
import '../../css/j/jgzwymb5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ky3doeivt"/><path class="jgzwymb5z"/></g>`,
		"fallback": "si:user-alt-2-duotone",
	});
}

export default Component;
