import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/k/kw7_76byl.css';
import '../../css/d/di-0r9bjt.css';
import '../../css/e/enty5jbik.css';
import '../../css/o/owajxdbfo.css';
import '../../css/d/dkfjrabff.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="kw7_76byl"/><path class="di-0r9bjt"/><path class="enty5jbik"/><path class="owajxdbfo"/><path class="dkfjrabff"/></g>`,
		"fallback": "icon-park-outline:light-house",
	});
}

export default Component;
