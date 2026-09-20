import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_iy0tb0f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="b_iy0tb0f"/>`,
		"fallback": "ix:plant-search",
	});
}

export default Component;
