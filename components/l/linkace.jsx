import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mib64yh7v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mib64yh7v"/>`,
		"fallback": "selfhst:linkace",
	});
}

export default Component;
