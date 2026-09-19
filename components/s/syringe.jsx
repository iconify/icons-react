import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vuh1g2ctr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vuh1g2ctr"/>`,
		"fallback": "game-icons:syringe",
	});
}

export default Component;
