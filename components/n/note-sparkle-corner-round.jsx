import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpg-7bcoh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kpg-7bcoh"/>`,
		"fallback": "coolicons:note-sparkle-corner-round",
	});
}

export default Component;
