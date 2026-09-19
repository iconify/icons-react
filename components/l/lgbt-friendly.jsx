import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ep6z_l59c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ep6z_l59c"/>`,
		"fallback": "guidance:lgbt-friendly",
	});
}

export default Component;
