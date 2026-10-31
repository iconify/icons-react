import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/my9lfcb1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="my9lfcb1y"/>`,
		"fallback": "withicons:thermometer-snowflake-gloss",
	});
}

export default Component;
