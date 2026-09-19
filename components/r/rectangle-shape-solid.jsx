import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w07i9qbph.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w07i9qbph"/>`,
		"fallback": "fluent-mdl2:rectangle-shape-solid",
	});
}

export default Component;
