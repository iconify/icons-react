import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nd0n8dbco.css';
import '../../css/u/u66c07b8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nd0n8dbco"/><path class="u66c07b8k"/></g>`,
		"fallback": "keyline-icons:thumbs-up-sharp-duotone",
	});
}

export default Component;
