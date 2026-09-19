import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/uum279fow.css';
import '../../css/d/dsu0wpbkp.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="uum279fow"/><path class="dsu0wpbkp"/></g>`,
		"fallback": "gravity-ui:logo-nodejs",
	});
}

export default Component;
