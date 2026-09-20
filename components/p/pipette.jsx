import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/erxmj9b6e.css';
import '../../css/f/f7mbzacxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="erxmj9b6e"/><path class="f7mbzacxo"/></g>`,
		"fallback": "lets-icons:pipette",
	});
}

export default Component;
