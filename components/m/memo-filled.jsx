import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/scojwrb6i.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="scojwrb6i"/>`,
		"fallback": "dinkie-icons:memo-filled",
	});
}

export default Component;
