import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n072rrlng.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n072rrlng"/>`,
		"fallback": "ix:text-strike-through",
	});
}

export default Component;
