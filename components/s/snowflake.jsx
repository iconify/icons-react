import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grc_u9byw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="grc_u9byw"/>`,
		"fallback": "mi:snowflake",
	});
}

export default Component;
