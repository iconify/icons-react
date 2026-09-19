import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p2vkcacoh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p2vkcacoh"/>`,
		"fallback": "cuida:sun-outline",
	});
}

export default Component;
