import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cochksb_i.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cochksb_i"/>`,
		"fallback": "f7:music-note-2",
	});
}

export default Component;
