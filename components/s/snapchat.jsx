import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rt_9i3bqm.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rt_9i3bqm"/>`,
		"fallback": "fa:snapchat",
	});
}

export default Component;
