import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xc9_4i9cf.css';
import '../../css/t/t4sptf3kw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="user-add-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="xc9_4i9cf"/><path class="t4sptf3kw"/></g></g>`,
		"fallback": "cuida:user-add-outline",
	});
}

export default Component;
