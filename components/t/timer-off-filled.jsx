import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dqgrt7b6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dqgrt7b6a"/>`,
		"fallback": "griddy-icons:timer-off-filled",
	});
}

export default Component;
