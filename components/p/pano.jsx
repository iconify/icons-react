import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kbhx81bpm.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kbhx81bpm"/>`,
		"fallback": "f7:pano",
	});
}

export default Component;
