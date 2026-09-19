import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/af5cyabry.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="af5cyabry"/>`,
		"fallback": "fa7-solid:mars-stroke-up",
	});
}

export default Component;
