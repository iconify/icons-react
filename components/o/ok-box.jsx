import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7nic9mka.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i7nic9mka"/>`,
		"fallback": "dinkie-icons:ok-box",
	});
}

export default Component;
