import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/toawf4b1r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="toawf4b1r"/>`,
		"fallback": "streamline:snow-flake-remix",
	});
}

export default Component;
