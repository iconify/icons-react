import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gg3rv6t7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gg3rv6t7i"/>`,
		"fallback": "uil:snowflake-alt",
	});
}

export default Component;
