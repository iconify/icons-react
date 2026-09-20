import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzd74tzyw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hzd74tzyw"/>`,
		"fallback": "selfhst:openeuler-dark",
	});
}

export default Component;
