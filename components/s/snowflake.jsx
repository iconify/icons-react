import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8zxe7biw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m8zxe7biw"/>`,
		"fallback": "reicon:snowflake",
	});
}

export default Component;
