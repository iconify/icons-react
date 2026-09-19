import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/r/r8cyu3bwz.css';
import '../../css/v/v5sirqbym.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><rect class="r8cyu3bwz"/><path class="v5sirqbym"/></g>`,
		"fallback": "icon-park-outline:page",
	});
}

export default Component;
