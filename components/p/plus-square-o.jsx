import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r6nlq522g.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r6nlq522g"/>`,
		"fallback": "uiw:plus-square-o",
	});
}

export default Component;
