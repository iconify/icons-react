import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1mjunbsu.css';
import '../../css/u/uee9srb7s.css';
import '../../css/l/l1wv36b8h.css';

const viewBox = {"width":254.6,"height":253.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1mjunbsu"><path class="uee9srb7s"/><path class="l1wv36b8h"/></g>`,
		"fallback": "thesvg-color:tesla-light",
	});
}

export default Component;
