import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ew3xsfbas.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ew3xsfbas"/>`,
		"fallback": "dinkie-icons:mobile-phone-alt",
	});
}

export default Component;
