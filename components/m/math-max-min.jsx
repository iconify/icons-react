import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gwajrx3iw.css';
import '../../css/e/e_s0jaccd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gwajrx3iw"/><path class="e_s0jaccd"/></g>`,
		"fallback": "tabler:math-max-min",
	});
}

export default Component;
