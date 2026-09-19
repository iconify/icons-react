import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/s/squ9mdoiy.css';
import '../../css/r/rwtqvyb2j.css';
import '../../css/z/z4-wdckpa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="squ9mdoiy"/><path class="rwtqvyb2j"/><path class="z4-wdckpa"/></g>`,
		"fallback": "icon-park-outline:rule-two",
	});
}

export default Component;
