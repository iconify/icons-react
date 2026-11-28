import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pz7r0yydl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pz7r0yydl"/>`,
		"fallback": "noviair:pill-bottle-check",
	});
}

export default Component;
