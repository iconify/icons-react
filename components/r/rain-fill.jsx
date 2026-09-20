import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o-a8ix6yn.css';
import '../../css/k/k_nwkqbfv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="o-a8ix6yn"/><path class="k_nwkqbfv"/></g>`,
		"fallback": "lets-icons:rain-fill",
	});
}

export default Component;
