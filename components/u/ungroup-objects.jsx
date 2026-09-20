import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dj8h-z_we.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dj8h-z_we"/>`,
		"fallback": "ix:ungroup-objects",
	});
}

export default Component;
