import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwkw4bbic.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uwkw4bbic"/>`,
		"fallback": "lsicon:shield-filled",
	});
}

export default Component;
