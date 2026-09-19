import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9d51b_-e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9d51b_-e"/>`,
		"fallback": "game-icons:snowflake-1",
	});
}

export default Component;
