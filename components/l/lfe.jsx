import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p0a_jacfs.css';

const viewBox = {"width":434,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="p0a_jacfs"/>`,
		"fallback": "file-icons:lfe",
	});
}

export default Component;
