import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/ovp2mnb7o.css';
import '../../css/g/g7w6vqbno.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ovp2mnb7o"/><path class="g7w6vqbno"/></g>`,
		"fallback": "tabler:variable-off",
	});
}

export default Component;
