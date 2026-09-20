import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nelzl-g4y.css';
import '../../css/h/hrs665dyq.css';
import '../../css/k/kvgdj-89m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="nelzl-g4y"/><path class="hrs665dyq"/><path class="kvgdj-89m"/></g>`,
		"fallback": "tabler:map-shield",
	});
}

export default Component;
