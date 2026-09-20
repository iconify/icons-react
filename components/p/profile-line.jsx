import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rq5mdzb5e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rq5mdzb5e"/>`,
		"fallback": "ri:profile-line",
	});
}

export default Component;
