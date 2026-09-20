import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpjxycb8f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kpjxycb8f"/>`,
		"fallback": "roentgen:table-and-two-chairs-roof",
	});
}

export default Component;
