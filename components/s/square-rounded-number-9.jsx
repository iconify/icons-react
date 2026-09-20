import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rk7x5c74b.css';
import '../../css/n/nhrqm3bvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rk7x5c74b"/><path class="nhrqm3bvg"/></g>`,
		"fallback": "tabler:square-rounded-number-9",
	});
}

export default Component;
