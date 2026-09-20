import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/az0o31b0s.css';
import '../../css/d/dqxlzcbzl.css';
import '../../css/p/pcpc27ofz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="az0o31b0s"/><path class="dqxlzcbzl"/><circle transform="rotate(90 10 9)" class="pcpc27ofz"/></g>`,
		"fallback": "majesticons:money-hand",
	});
}

export default Component;
