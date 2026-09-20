import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9yzp1ixx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l9yzp1ixx"/>`,
		"fallback": "selfhst:trilium-notes-light",
	});
}

export default Component;
