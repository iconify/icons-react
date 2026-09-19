import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bbacixbva.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bbacixbva"/>`,
		"fallback": "file-icons:stata",
	});
}

export default Component;
