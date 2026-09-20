import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hl6t_4w4h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hl6t_4w4h"/>`,
		"fallback": "selfhst:openhab-dark",
	});
}

export default Component;
