import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sfqdbdbqm.css';
import '../../css/p/pw7-4015h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="sfqdbdbqm"/><path class="pw7-4015h"/></g>`,
		"fallback": "coolicons:smartwatch-duocolor-round",
	});
}

export default Component;
