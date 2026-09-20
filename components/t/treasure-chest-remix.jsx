import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y1omeib4c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y1omeib4c"/>`,
		"fallback": "streamline-flex:treasure-chest-remix",
	});
}

export default Component;
