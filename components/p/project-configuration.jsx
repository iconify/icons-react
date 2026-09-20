import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/le2yqbc4u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="le2yqbc4u"/>`,
		"fallback": "ix:project-configuration",
	});
}

export default Component;
