import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ap5--l7rc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ap5--l7rc"/>`,
		"fallback": "selfhst:linkding-light",
	});
}

export default Component;
