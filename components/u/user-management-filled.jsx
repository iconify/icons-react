import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qs_b2rwwp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qs_b2rwwp"/>`,
		"fallback": "ix:user-management-filled",
	});
}

export default Component;
