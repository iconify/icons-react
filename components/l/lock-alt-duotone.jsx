import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zcm0jnb5j.css';
import '../../css/l/lok2_9bwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zcm0jnb5j"/><path class="lok2_9bwy"/></g>`,
		"fallback": "si:lock-alt-duotone",
	});
}

export default Component;
