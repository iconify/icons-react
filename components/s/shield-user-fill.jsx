import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xshb9nbog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xshb9nbog"/>`,
		"fallback": "ri:shield-user-fill",
	});
}

export default Component;
