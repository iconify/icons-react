import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sej40yb-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sej40yb-l"/>`,
		"fallback": "withicons:music-note-gloss",
	});
}

export default Component;
