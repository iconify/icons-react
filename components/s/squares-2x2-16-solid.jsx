import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqls33b8r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqls33b8r"/>`,
		"fallback": "heroicons:squares-2x2-16-solid",
	});
}

export default Component;
