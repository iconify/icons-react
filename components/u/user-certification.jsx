import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/byc7-gb-w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="byc7-gb-w"/>`,
		"fallback": "carbon:user-certification",
	});
}

export default Component;
