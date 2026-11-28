import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ii3qrcico.css';
import '../../css/o/osltdjhet.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ii3qrcico"/><path class="osltdjhet"/></g>`,
		"fallback": "pullo:satellite-dish-duotone",
	});
}

export default Component;
