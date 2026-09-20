import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f1149ccmm.css';
import '../../css/f/f2ny9eb9g.css';
import '../../css/u/u-_c-8bob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="f1149ccmm"/><path class="f2ny9eb9g"/><path class="u-_c-8bob"/></g>`,
		"fallback": "tabler:lasso-off",
	});
}

export default Component;
