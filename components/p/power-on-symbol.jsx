import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hq6rqbp0n.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hq6rqbp0n"/>`,
		"fallback": "openmoji:power-on-symbol",
	});
}

export default Component;
