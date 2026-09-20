import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umm606kxf.css';
import '../../css/b/bwr86fd6l.css';
import '../../css/a/a95cswbaz.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="umm606kxf"><path class="bwr86fd6l"/><path class="a95cswbaz"/></g>`,
		"fallback": "streamline-stickies-color:programming",
	});
}

export default Component;
