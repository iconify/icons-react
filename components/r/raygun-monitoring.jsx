import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ifwegobae.css';
import '../../css/b/bi8laefud.css';
import '../../css/y/yj-_c0bey.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ifwegobae"/><path class="bi8laefud"/><path class="yj-_c0bey"/>`,
		"fallback": "selfhst:raygun-monitoring",
	});
}

export default Component;
