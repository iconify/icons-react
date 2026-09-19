import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmrrr4bud.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pmrrr4bud"/>`,
		"fallback": "garden:sparkle-stroke-16",
	});
}

export default Component;
