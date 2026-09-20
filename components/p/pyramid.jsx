import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l-8zs4kug.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l-8zs4kug"/>`,
		"fallback": "roentgen:pyramid",
	});
}

export default Component;
