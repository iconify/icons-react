import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otdpeqbpz.css';

const viewBox = {"width":304,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="otdpeqbpz"/>`,
		"fallback": "zmdi:pin-drop",
	});
}

export default Component;
