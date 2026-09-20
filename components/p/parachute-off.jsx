import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/szxi50beo.css';
import '../../css/v/v7215cbgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="szxi50beo"/><path class="v7215cbgo"/></g>`,
		"fallback": "tabler:parachute-off",
	});
}

export default Component;
