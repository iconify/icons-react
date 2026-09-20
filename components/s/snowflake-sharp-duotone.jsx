import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qj-a1cb1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qj-a1cb1z"/>`,
		"fallback": "keyline-icons:snowflake-sharp-duotone",
	});
}

export default Component;
