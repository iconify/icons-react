import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0xxt-34c.css';
import '../../css/f/f2cq9cczx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s0xxt-34c"/><path class="f2cq9cczx"/>`,
		"fallback": "solar:mask-happly-bold-duotone",
	});
}

export default Component;
