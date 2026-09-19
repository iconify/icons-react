import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p0mlyrj9a.css';
import '../../css/n/n-7ppqbyk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p0mlyrj9a"/><path class="n-7ppqbyk"/></g>`,
		"fallback": "bi:tag",
	});
}

export default Component;
