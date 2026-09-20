import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c8nq4o_1k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c8nq4o_1k"/>`,
		"fallback": "roentgen:tram",
	});
}

export default Component;
