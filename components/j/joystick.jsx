import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dix5l05ml.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dix5l05ml"/>`,
		"fallback": "dinkie-icons:joystick",
	});
}

export default Component;
