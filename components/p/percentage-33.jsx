import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cz9iw1m9u.css';
import '../../css/q/q_a5zcbnk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cz9iw1m9u"/><path class="q_a5zcbnk"/></g>`,
		"fallback": "tabler:percentage-33",
	});
}

export default Component;
