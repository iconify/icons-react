import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ul1iwoteu.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ul1iwoteu"/>`,
		"fallback": "devicon:monogame",
	});
}

export default Component;
