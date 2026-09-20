import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrks0fbpf.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/u/uhl77pb6t.css';
import '../../css/n/n8gu1ebhy.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrks0fbpf"/><g class="jn8qy4bru"><path clip-rule="evenodd" class="uhl77pb6t"/><path class="n8gu1ebhy"/></g>`,
		"fallback": "openmoji:keycap-6",
	});
}

export default Component;
