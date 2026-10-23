import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-5necq1c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-5necq1c"/>`,
		"fallback": "vadivam:user-cog",
	});
}

export default Component;
