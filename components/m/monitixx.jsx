import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uu-koxf9j.css';
import '../../css/c/c3l_2jbrp.css';
import '../../css/g/g2-0-bchb.css';

const viewBox = {"width":544,"height":540,"left":-32,"top":-79};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="uu-koxf9j"><path class="c3l_2jbrp"/><path class="g2-0-bchb"/></g>`,
		"fallback": "thesvg-color:monitixx",
	});
}

export default Component;
