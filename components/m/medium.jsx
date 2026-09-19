import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bj0wl3bpu.css';

const viewBox = {"width":16,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bj0wl3bpu"/>`,
		"fallback": "formkit:medium",
	});
}

export default Component;
