import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-001pbgd.css';

const viewBox = {"width":1792,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-001pbgd"/>`,
		"fallback": "fa:user-circle",
	});
}

export default Component;
