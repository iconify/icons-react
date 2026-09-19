import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ay40b4-uq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ay40b4-uq"/>`,
		"fallback": "griddy-icons:patreon-filled",
	});
}

export default Component;
