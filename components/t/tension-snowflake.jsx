import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/inlci5axh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="inlci5axh"/>`,
		"fallback": "game-icons:tension-snowflake",
	});
}

export default Component;
