import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/n/nmctdqbaq.css';
import '../../css/j/jjitwcc7v.css';
import '../../css/b/bm2e03zbo.css';

const viewBox = {"width":49,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="nmctdqbaq"/><path class="jjitwcc7v"/><path class="bm2e03zbo"/></g>`,
		"fallback": "icon-park-outline:storage-card-one",
	});
}

export default Component;
