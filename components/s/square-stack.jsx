import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b82ju8mgy.css';
import '../../css/l/lm1qn4__m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="b82ju8mgy"/><rect class="lm1qn4__m"/></g>`,
		"fallback": "lucide:square-stack",
	});
}

export default Component;
