import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e28o0mlgm.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/u/uha7d-bqe.css';
import '../../css/q/q52c00e9a.css';
import '../../css/j/jn_kjqe6t.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e28o0mlgm"/><g class="jn8qy4bru"><path clip-rule="evenodd" class="uha7d-bqe"/><path clip-rule="evenodd" class="q52c00e9a"/><path class="jn_kjqe6t"/></g>`,
		"fallback": "openmoji:keycap-9",
	});
}

export default Component;
