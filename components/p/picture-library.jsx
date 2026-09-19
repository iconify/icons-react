import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6muexbzd.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j6muexbzd"/>`,
		"fallback": "fluent-mdl2:picture-library",
	});
}

export default Component;
