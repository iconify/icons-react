import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4z2xab2j.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k4z2xab2j"/>`,
		"fallback": "devicon-plain:radstudio",
	});
}

export default Component;
