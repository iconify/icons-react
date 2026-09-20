import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/onssh9hzr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="onssh9hzr"/>`,
		"fallback": "selfhst:tigera-light",
	});
}

export default Component;
