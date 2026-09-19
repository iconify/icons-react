import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l2q5w7pwm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l2q5w7pwm"/>`,
		"fallback": "game-icons:trumpet",
	});
}

export default Component;
