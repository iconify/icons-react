import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5amrmbri.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w5amrmbri"/>`,
		"fallback": "streamline:lost-and-found-remix",
	});
}

export default Component;
