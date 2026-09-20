import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6vn8uk8p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6vn8uk8p"/>`,
		"fallback": "selfhst:netdata-light",
	});
}

export default Component;
