import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/daw47cb8q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="daw47cb8q"/>`,
		"fallback": "carbon:thumbnail-2",
	});
}

export default Component;
