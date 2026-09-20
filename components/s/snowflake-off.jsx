import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vy_c_3btn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vy_c_3btn"/>`,
		"fallback": "mdi:snowflake-off",
	});
}

export default Component;
