import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1kf68bqu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1kf68bqu"/>`,
		"fallback": "selfhst:solidtime-light",
	});
}

export default Component;
