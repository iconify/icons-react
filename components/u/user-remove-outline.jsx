import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nj_9kib7h.css';
import '../../css/t/t4sptf3kw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="user-remove-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="nj_9kib7h"/><path class="t4sptf3kw"/></g></g>`,
		"fallback": "cuida:user-remove-outline",
	});
}

export default Component;
