import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tjisd8szm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tjisd8szm"/>`,
		"fallback": "lets-icons:vertical-switch-long-light",
	});
}

export default Component;
