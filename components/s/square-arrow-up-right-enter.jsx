import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xlh9svbyw.css';
import '../../css/m/mg4z3fkyt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xlh9svbyw"/><path class="mg4z3fkyt"/></g>`,
		"fallback": "lucide:square-arrow-up-right-enter",
	});
}

export default Component;
