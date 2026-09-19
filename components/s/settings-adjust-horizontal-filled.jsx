import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fk0s61b7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fk0s61b7c"/>`,
		"fallback": "griddy-icons:settings-adjust-horizontal-filled",
	});
}

export default Component;
