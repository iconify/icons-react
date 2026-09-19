import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/casyzt9mq.css';
import '../../css/x/x9zxrvomu.css';
import '../../css/m/mirjr4bon.css';
import '../../css/q/q-73_14rz.css';
import '../../css/e/ey2mdxbfn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="casyzt9mq"><path class="x9zxrvomu"/><path clip-rule="evenodd" class="mirjr4bon"/><path class="q-73_14rz"/><path class="ey2mdxbfn"/></g>`,
		"fallback": "icon-park-outline:trophy",
	});
}

export default Component;
