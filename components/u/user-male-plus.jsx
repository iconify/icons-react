import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pkg27pk_z.css';
import '../../css/x/xs6i9rbml.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pkg27pk_z"/><path class="xs6i9rbml"/></g>`,
		"fallback": "andrsrxn:user-male-plus",
	});
}

export default Component;
