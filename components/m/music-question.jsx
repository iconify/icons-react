import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nriz88b3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nriz88b3z"/>`,
		"fallback": "tabler:music-question",
	});
}

export default Component;
