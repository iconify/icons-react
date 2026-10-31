import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/r/rtny4kbqq.css';
import '../../css/s/ss0gbbcxt.css';
import '../../css/x/xih1z7baw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="rtny4kbqq wm-shadow"/><path class="ss0gbbcxt wm-shadow"/><path class="xih1z7baw"/></g>`,
		"fallback": "withicons-brutal:snowflake",
	});
}

export default Component;
