import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ua7k72yme.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary ua7k72yme"/>`,
		"fallback": "iconaut:snowflake-duotone",
	});
}

export default Component;
