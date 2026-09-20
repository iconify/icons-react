import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/egy6mj8qz.css';
import '../../css/l/le313kb5f.css';
import '../../css/h/hu9nu1b3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="egy6mj8qz"/><path class="le313kb5f"/><path class="hu9nu1b3b"/></g>`,
		"fallback": "si:shield-police-duotone",
	});
}

export default Component;
