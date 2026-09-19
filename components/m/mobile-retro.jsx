import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vs5km1oqn.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vs5km1oqn"/>`,
		"fallback": "fa6-solid:mobile-retro",
	});
}

export default Component;
