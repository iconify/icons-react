import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdxu77b3b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdxu77b3b"/>`,
		"fallback": "roentgen:slide-and-water",
	});
}

export default Component;
