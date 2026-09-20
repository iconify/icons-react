import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d670ywb9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d670ywb9t"/>`,
		"fallback": "mynaui:telephone-in-solid",
	});
}

export default Component;
