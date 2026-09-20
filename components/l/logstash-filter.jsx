import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wi9tzv3au.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wi9tzv3au"/>`,
		"fallback": "oui:logstash-filter",
	});
}

export default Component;
