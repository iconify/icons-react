import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbabc2j6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fbabc2j6s"/>`,
		"fallback": "iconamoon:playlist-shuffle-fill",
	});
}

export default Component;
