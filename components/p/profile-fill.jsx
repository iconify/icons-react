import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grg7xwilx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="grg7xwilx"/>`,
		"fallback": "ri:profile-fill",
	});
}

export default Component;
