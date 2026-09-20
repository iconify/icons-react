import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/epu_tj-1c.css';
import '../../css/g/ghvq8sbip.css';
import '../../css/t/t2b8qbc3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="epu_tj-1c"/><path class="ghvq8sbip"/><path class="t2b8qbc3s"/></g>`,
		"fallback": "solar:umbrella-bold-duotone",
	});
}

export default Component;
