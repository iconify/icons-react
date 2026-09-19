import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbd0fcccq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbd0fcccq"/>`,
		"fallback": "icons8:rounded-rectangle",
	});
}

export default Component;
