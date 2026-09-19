import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdn_s7btv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jdn_s7btv"/>`,
		"fallback": "game-icons:spiral-bloom",
	});
}

export default Component;
