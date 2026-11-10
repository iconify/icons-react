import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lgmo30bop.css';
import '../../css/v/vc8w08shu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lgmo30bop"/><path class="vc8w08shu"/></g>`,
		"fallback": "lucide:square-arrow-down-exit",
	});
}

export default Component;
