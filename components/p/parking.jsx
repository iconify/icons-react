import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sq903rb6z.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sq903rb6z"/>`,
		"fallback": "maki:parking",
	});
}

export default Component;
