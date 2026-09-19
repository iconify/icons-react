import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_0v-4byl.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_0v-4byl"/>`,
		"fallback": "bi:universal-access",
	});
}

export default Component;
