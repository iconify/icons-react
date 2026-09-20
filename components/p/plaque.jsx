import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1kdhxj1g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g1kdhxj1g"/>`,
		"fallback": "roentgen:plaque",
	});
}

export default Component;
