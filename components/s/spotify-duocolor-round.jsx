import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cz7l42nhx.css';
import '../../css/x/xtmvrk2bu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cz7l42nhx"/><path class="xtmvrk2bu"/></g>`,
		"fallback": "coolicons:spotify-duocolor-round",
	});
}

export default Component;
