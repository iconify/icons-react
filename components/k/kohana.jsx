import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_7p9s-u.css';

const viewBox = {"width":771,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nz_7p9s-u"/>`,
		"fallback": "whh:kohana",
	});
}

export default Component;
