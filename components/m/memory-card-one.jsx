import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/z/zfnvhzb9k.css';
import '../../css/o/o1khnab1b.css';
import '../../css/h/hpzp4y6qo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="zfnvhzb9k"/><path class="o1khnab1b"/><path class="hpzp4y6qo"/></g>`,
		"fallback": "icon-park-solid:memory-card-one",
	});
}

export default Component;
