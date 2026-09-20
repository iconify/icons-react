import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kvttj8bko.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kvttj8bko"/>`,
		"fallback": "roentgen:planet",
	});
}

export default Component;
