import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jk2lnt3lg.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jk2lnt3lg"/>`,
		"fallback": "fa7-regular:paper-plane",
	});
}

export default Component;
