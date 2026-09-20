import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcm3g6b6b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcm3g6b6b"/>`,
		"fallback": "selfhst:librechat-dark",
	});
}

export default Component;
