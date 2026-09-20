import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tv0lq0-ac.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tv0lq0-ac"/>`,
		"fallback": "roentgen:table",
	});
}

export default Component;
