import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p62y5wbmg.css';
import '../../css/j/j3vkzhbdr.css';
import '../../css/h/ha4ubezmg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p62y5wbmg"/><path class="j3vkzhbdr"/><path class="ha4ubezmg"/></g>`,
		"fallback": "streamline-plump-color:pencil-circle-flat",
	});
}

export default Component;
