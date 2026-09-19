import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzroh3b8t.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tzroh3b8t"/>`,
		"fallback": "fa7-solid:splotch",
	});
}

export default Component;
