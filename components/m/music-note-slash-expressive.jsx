import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/by2a68kvd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="by2a68kvd"/>`,
		"fallback": "nrk:music-note-slash-expressive",
	});
}

export default Component;
