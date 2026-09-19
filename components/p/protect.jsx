import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/n/n_z5md42q.css';
import '../../css/o/omd-qi_-c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="n_z5md42q"/><path class="omd-qi_-c"/></g>`,
		"fallback": "icon-park-outline:protect",
	});
}

export default Component;
