import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u46mg0b8z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u46mg0b8z"/>`,
		"fallback": "file-icons:terminal",
	});
}

export default Component;
