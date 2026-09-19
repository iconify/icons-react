import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ze28hzlyg.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ze28hzlyg"/>`,
		"fallback": "dinkie-icons:keycap-digit-three-filled",
	});
}

export default Component;
