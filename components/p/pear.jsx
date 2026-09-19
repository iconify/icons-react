import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p95ko6b0d.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p95ko6b0d"/>`,
		"fallback": "dinkie-icons:pear",
	});
}

export default Component;
