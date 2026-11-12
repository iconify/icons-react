import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0sj-8bcy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0sj-8bcy"/>`,
		"fallback": "selfhst:rallly-light",
	});
}

export default Component;
