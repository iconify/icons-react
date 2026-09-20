import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n5g3q8bii.css';
import '../../css/n/ned4scb6o.css';
import '../../css/o/ohvlkxycg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="n5g3q8bii"/><path class="ned4scb6o"/><path class="ohvlkxycg"/></g>`,
		"fallback": "tabler:universe",
	});
}

export default Component;
