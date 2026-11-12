import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ya06mob_t.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ya06mob_t"/>`,
		"fallback": "devicon:springboot",
	});
}

export default Component;
