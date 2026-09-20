import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q387_hv1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q387_hv1c"/>`,
		"fallback": "mdi:layers-outline",
	});
}

export default Component;
