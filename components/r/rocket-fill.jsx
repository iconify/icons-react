import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pc_cecawp.css';
import '../../css/d/doi1gqbgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pc_cecawp"/><path class="doi1gqbgi"/></g>`,
		"fallback": "keyline-icons:rocket-fill",
	});
}

export default Component;
