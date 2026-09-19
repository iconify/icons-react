import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/e/es_1cac2m.css';
import '../../css/v/v7tv4gjxm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="es_1cac2m"/><path class="v7tv4gjxm"/></g>`,
		"fallback": "icon-park-solid:road-sign",
	});
}

export default Component;
