import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oxhb4cbry.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oxhb4cbry"/>`,
		"fallback": "dinkie-icons:label-filled",
	});
}

export default Component;
