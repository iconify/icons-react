import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fhq63ab0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fhq63ab0q"/>`,
		"fallback": "noviair:video-play",
	});
}

export default Component;
