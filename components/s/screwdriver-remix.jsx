import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y5ikiw6lb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y5ikiw6lb"/>`,
		"fallback": "streamline-plump:screwdriver-remix",
	});
}

export default Component;
