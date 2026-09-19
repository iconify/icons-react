import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5b94xbyh.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5b94xbyh"/>`,
		"fallback": "dinkie-icons:secret-han-circled-filled",
	});
}

export default Component;
