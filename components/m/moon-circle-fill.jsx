import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s0_g8l7oa.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s0_g8l7oa"/>`,
		"fallback": "f7:moon-circle-fill",
	});
}

export default Component;
