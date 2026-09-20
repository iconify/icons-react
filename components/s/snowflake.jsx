import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sq8nxtbdq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sq8nxtbdq"/>`,
		"fallback": "oui:snowflake",
	});
}

export default Component;
