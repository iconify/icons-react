import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/iwpsgcz9o.css';
import '../../css/u/u70rrcbek.css';
import '../../css/o/oe0ihcctg.css';
import '../../css/o/o75fq_bgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="iwpsgcz9o"/><path class="u70rrcbek"/><path class="oe0ihcctg"/><path class="o75fq_bgi"/></g>`,
		"fallback": "solar:suitcase-bold-duotone",
	});
}

export default Component;
