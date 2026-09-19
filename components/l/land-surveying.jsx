import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/g/g4iz8vbbj.css';
import '../../css/u/uri8rt3bb.css';
import '../../css/w/wj--2_bna.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="g4iz8vbbj"/><path class="uri8rt3bb"/><path class="wj--2_bna"/></g>`,
		"fallback": "icon-park-outline:land-surveying",
	});
}

export default Component;
