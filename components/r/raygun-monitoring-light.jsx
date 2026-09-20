import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yqsidac3y.css';
import '../../css/x/x9m8ihb_s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yqsidac3y"/><path class="x9m8ihb_s"/>`,
		"fallback": "selfhst:raygun-monitoring-light",
	});
}

export default Component;
