import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o3xz9b9iu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o3xz9b9iu"/>`,
		"fallback": "carbon:split-screen",
	});
}

export default Component;
