import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/t8j7pye4j.css';
import '../../css/e/eti5lpb6m.css';
import '../../css/z/zvv3e7qfb.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="t8j7pye4j"/><path class="eti5lpb6m"/><path class="zvv3e7qfb"/></g>`,
		"fallback": "fad:shuffle",
	});
}

export default Component;
