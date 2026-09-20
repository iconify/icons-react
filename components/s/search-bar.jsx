import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/u9rxsbxoh.css';
import '../../css/c/cj0y4nb6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="u9rxsbxoh"/><path class="cj0y4nb6e"/></g>`,
		"fallback": "streamline-sharp:search-bar",
	});
}

export default Component;
