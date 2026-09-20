import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o8l__7b2k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o8l__7b2k"/>`,
		"fallback": "roentgen:maglev",
	});
}

export default Component;
