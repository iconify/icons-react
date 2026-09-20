import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p5ecrqbyu.css';

const viewBox = {"width":602.362,"height":131.705};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p5ecrqbyu"/>`,
		"fallback": "thesvg-color:lexus",
	});
}

export default Component;
