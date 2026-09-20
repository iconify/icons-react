import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fi0ujv19g.css';
import '../../css/d/dsd46tcgx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fi0ujv19g"/><path class="dsd46tcgx"/>`,
		"fallback": "streamline-pixel:interface-essential-bin",
	});
}

export default Component;
