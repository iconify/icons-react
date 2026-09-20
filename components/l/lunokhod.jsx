import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q61l43pac.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q61l43pac"/>`,
		"fallback": "roentgen:lunokhod",
	});
}

export default Component;
