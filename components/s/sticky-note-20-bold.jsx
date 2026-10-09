import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tyer2sg9u.css';
import '../../css/w/w9octyb7d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tyer2sg9u"/><path class="w9octyb7d"/>`,
		"fallback": "energy-icons:sticky-note-20-bold",
	});
}

export default Component;
