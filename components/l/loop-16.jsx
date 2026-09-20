import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iosgfqbhb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iosgfqbhb"/>`,
		"fallback": "octicon:loop-16",
	});
}

export default Component;
