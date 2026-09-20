import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dr-49bb3b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dr-49bb3b"/>`,
		"fallback": "roentgen:millstone-with-furrows",
	});
}

export default Component;
