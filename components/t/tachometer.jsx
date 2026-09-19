import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/w_ohb3oum.css';
import '../../css/w/w5gn7_abn.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="w_ohb3oum"/><path class="w5gn7_abn"/></g>`,
		"fallback": "gravity-ui:tachometer",
	});
}

export default Component;
