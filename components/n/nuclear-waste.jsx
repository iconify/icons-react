import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_z6dqb7s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v_z6dqb7s"/>`,
		"fallback": "game-icons:nuclear-waste",
	});
}

export default Component;
