import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rb1we2zpy.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rb1we2zpy"/>`,
		"fallback": "dinkie-icons:keycap-fn-filled",
	});
}

export default Component;
