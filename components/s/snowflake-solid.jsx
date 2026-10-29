import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6q3n9bvr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v6q3n9bvr"/>`,
		"fallback": "withicons:snowflake-solid",
	});
}

export default Component;
