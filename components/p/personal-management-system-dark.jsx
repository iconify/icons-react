import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yr964_uzt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yr964_uzt"/>`,
		"fallback": "selfhst:personal-management-system-dark",
	});
}

export default Component;
