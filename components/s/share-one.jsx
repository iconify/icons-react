import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/r/rwtewhbdy.css';
import '../../css/a/ayj3gb6gy.css';
import '../../css/v/v_ynbeuec.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="rwtewhbdy"/><path class="ayj3gb6gy"/><path class="v_ynbeuec"/></g>`,
		"fallback": "icon-park-outline:share-one",
	});
}

export default Component;
