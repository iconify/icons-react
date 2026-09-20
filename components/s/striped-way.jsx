import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m4whe5bzq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m4whe5bzq"/>`,
		"fallback": "temaki:striped-way",
	});
}

export default Component;
