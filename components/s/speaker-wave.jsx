import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v5y-ecs9j.css';
import '../../css/i/iaa-v9ber.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v5y-ecs9j"/><path class="iaa-v9ber"/></g>`,
		"fallback": "heroicons-solid:speaker-wave",
	});
}

export default Component;
