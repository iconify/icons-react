import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-dchub_m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-dchub_m"/>`,
		"fallback": "game-icons:pentacle",
	});
}

export default Component;
