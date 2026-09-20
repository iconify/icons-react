import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g46yy7bor.css';
import '../../css/w/wdnbtobig.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="g46yy7bor"/><path class="wdnbtobig"/>`,
		"fallback": "selfhst:strava-statistics",
	});
}

export default Component;
