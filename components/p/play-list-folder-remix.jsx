import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wx29k_bto.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wx29k_bto"/>`,
		"fallback": "streamline:play-list-folder-remix",
	});
}

export default Component;
