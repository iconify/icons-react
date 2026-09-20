import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mf80ehb4v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mf80ehb4v"/>`,
		"fallback": "roentgen:table-and-two-chairs-roof-and-walls",
	});
}

export default Component;
