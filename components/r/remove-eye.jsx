import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ih95x1b-r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ih95x1b-r"/>`,
		"fallback": "ix:remove-eye",
	});
}

export default Component;
