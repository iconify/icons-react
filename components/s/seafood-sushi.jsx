import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ye6kfhynn.css';
import '../../css/g/g_q5xsakd.css';
import '../../css/v/v7cq--kdp.css';
import '../../css/g/gdplqfzsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ye6kfhynn"/><path class="g_q5xsakd"/><path class="v7cq--kdp"/><path class="gdplqfzsd"/></g>`,
		"fallback": "streamline-ultimate-color:seafood-sushi",
	});
}

export default Component;
