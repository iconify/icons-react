import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uww6hw4bm.css';
import '../../css/b/biqogzqmw.css';
import '../../css/i/i1_351y6t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uww6hw4bm"/><path class="biqogzqmw"/><path class="i1_351y6t"/>`,
		"fallback": "energy-icons:sort-alpha-48",
	});
}

export default Component;
