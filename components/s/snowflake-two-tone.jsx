import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2c_x7bdf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b2c_x7bdf"/>`,
		"fallback": "keyline-icons:snowflake-two-tone",
	});
}

export default Component;
