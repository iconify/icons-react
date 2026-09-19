import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yg-e9wbuc.css';
import '../../css/p/ptezgqtbz.css';
import '../../css/n/nazz6ccrh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yg-e9wbuc"/><path class="ptezgqtbz"/><path class="nazz6ccrh"/></g>`,
		"fallback": "bi:sign-railroad-fill",
	});
}

export default Component;
