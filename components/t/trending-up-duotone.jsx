import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/to00mwrqn.css';
import '../../css/s/sdvhe3n5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary to00mwrqn"/><path class="primary sdvhe3n5i"/></g>`,
		"fallback": "iconaut:trending-up-duotone",
	});
}

export default Component;
