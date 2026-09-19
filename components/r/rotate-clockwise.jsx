import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pj0elhzfq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pj0elhzfq"/>`,
		"fallback": "carbon:rotate-clockwise",
	});
}

export default Component;
