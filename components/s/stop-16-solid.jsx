import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ol9rll3qo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="ol9rll3qo"/>`,
		"fallback": "heroicons:stop-16-solid",
	});
}

export default Component;
