import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqvgs1b3g.css';
import '../../css/u/uiqysqbcu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqvgs1b3g"/><path class="uiqysqbcu"/>`,
		"fallback": "energy-icons:volume-20-bold",
	});
}

export default Component;
