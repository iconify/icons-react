import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2b7a6_zx.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l2b7a6_zx"/>`,
		"fallback": "dinkie-icons:otfeature-fwid",
	});
}

export default Component;
