import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z0a7ymb4j.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z0a7ymb4j"/>`,
		"fallback": "f7:rectangle-grid-3x2-fill",
	});
}

export default Component;
