import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d5jbh9b2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d5jbh9b2g"/>`,
		"fallback": "withicons:octagon-alert-solid",
	});
}

export default Component;
