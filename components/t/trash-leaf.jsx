import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c4iuapbrf.css';
import '../../css/w/wikqrqbam.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="c4iuapbrf"/><path class="wikqrqbam"/></g>`,
		"fallback": "lucide:trash-leaf",
	});
}

export default Component;
