import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cmjqbcn7x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cmjqbcn7x"/>`,
		"fallback": "ix:magnet-cancelled",
	});
}

export default Component;
