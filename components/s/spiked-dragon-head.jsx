import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmk8_o-us.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rmk8_o-us"/>`,
		"fallback": "game-icons:spiked-dragon-head",
	});
}

export default Component;
