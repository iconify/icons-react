import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/epg42eebu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="epg42eebu"/>`,
		"fallback": "ri:layout-left-2-fill",
	});
}

export default Component;
