import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/te6y77d1p.css';
import '../../css/l/lm6_mj63l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="te6y77d1p"/><path class="lm6_mj63l"/></g>`,
		"fallback": "keyline-icons:sunrise-two-tone",
	});
}

export default Component;
