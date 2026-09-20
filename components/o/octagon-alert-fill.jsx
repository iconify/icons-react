import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixghxtb1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixghxtb1l"/>`,
		"fallback": "keyline-icons:octagon-alert-fill",
	});
}

export default Component;
