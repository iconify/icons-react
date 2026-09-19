import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k0_rb3l7h.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k0_rb3l7h"/>`,
		"fallback": "dinkie-icons:keycap-digit-five",
	});
}

export default Component;
