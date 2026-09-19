import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-k13z9jx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-k13z9jx"/>`,
		"fallback": "griddy-icons:sim-card-filled",
	});
}

export default Component;
