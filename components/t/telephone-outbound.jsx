import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-ux0x7wg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-ux0x7wg"/>`,
		"fallback": "bi:telephone-outbound",
	});
}

export default Component;
