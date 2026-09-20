import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-nu6kbzo.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v-nu6kbzo"/>`,
		"fallback": "pinhead:person-jumping-in-puddle-with-splashes",
	});
}

export default Component;
