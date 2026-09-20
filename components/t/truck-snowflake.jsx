import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9-67nb_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9-67nb_p"/>`,
		"fallback": "mdi:truck-snowflake",
	});
}

export default Component;
