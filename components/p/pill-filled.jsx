import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5_a48b4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q5_a48b4c"/>`,
		"fallback": "griddy-icons:pill-filled",
	});
}

export default Component;
