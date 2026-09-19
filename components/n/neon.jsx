import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chai4np5k.css';

const viewBox = {"width":470,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="chai4np5k"/>`,
		"fallback": "file-icons:neon",
	});
}

export default Component;
