import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ds3wm4rom.css';
import '../../css/o/oh4-_7byg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ds3wm4rom"/><path class="oh4-_7byg"/>`,
		"fallback": "energy-icons:map-pin-off-20",
	});
}

export default Component;
