import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfi64hb8h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfi64hb8h"/>`,
		"fallback": "bi:lock",
	});
}

export default Component;
