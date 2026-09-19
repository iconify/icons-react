import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2ut8zqbf.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2ut8zqbf"/>`,
		"fallback": "devicon-plain:rider",
	});
}

export default Component;
