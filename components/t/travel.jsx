import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z3o4tj12j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z3o4tj12j"/>`,
		"fallback": "mdi:travel",
	});
}

export default Component;
