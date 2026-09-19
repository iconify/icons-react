import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rplyiwqjv.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rplyiwqjv"/>`,
		"fallback": "dinkie-icons:no-entry-sign",
	});
}

export default Component;
