import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h72we6b4o.css';
import '../../css/j/jycc3kbae.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h72we6b4o"/><path class="jycc3kbae"/>`,
		"fallback": "ei:trash",
	});
}

export default Component;
