import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jy_mr9b7h.css';
import '../../css/e/egxn25b7a.css';
import '../../css/x/xvs51v-6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pin-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="jy_mr9b7h"/><path class="egxn25b7a"/><path class="xvs51v-6q"/></g></g>`,
		"fallback": "cuida:pin-outline",
	});
}

export default Component;
