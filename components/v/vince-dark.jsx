import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mr8x_qhrz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mr8x_qhrz"/>`,
		"fallback": "selfhst:vince-dark",
	});
}

export default Component;
