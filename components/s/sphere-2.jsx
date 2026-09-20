import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/db_9mcbte.css';
import '../../css/q/q_a5zcbnk.css';
import '../../css/c/c58rjmbww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="db_9mcbte"/><path class="q_a5zcbnk"/><path class="c58rjmbww"/></g>`,
		"fallback": "tabler:sphere-2",
	});
}

export default Component;
