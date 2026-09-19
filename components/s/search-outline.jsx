import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hjw279zux.css';
import '../../css/q/qb9lt7bxy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="search-outline"><g class="Vector n1lsf0bnc" clip-rule="evenodd"><path class="hjw279zux"/><path class="qb9lt7bxy"/></g></g>`,
		"fallback": "cuida:search-outline",
	});
}

export default Component;
