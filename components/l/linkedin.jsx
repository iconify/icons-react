import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kogk3ac4g.css';

const viewBox = {"width":464,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kogk3ac4g"/>`,
		"fallback": "ps:linkedin",
	});
}

export default Component;
