import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y76tjhvwb.css';
import '../../css/e/ebn2v62aa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y76tjhvwb"/><path class="ebn2v62aa"/>`,
		"fallback": "selfhst:rss-bridge",
	});
}

export default Component;
