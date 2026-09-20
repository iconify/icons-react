import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rua772bmo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rua772bmo"/>`,
		"fallback": "streamline:user-single-neutral-male-remix",
	});
}

export default Component;
