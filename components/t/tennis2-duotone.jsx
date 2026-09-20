import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n5qdi9bub.css';
import '../../css/p/pmg7xibqs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n5qdi9bub"/><path class="pmg7xibqs"/></g>`,
		"fallback": "reicon:tennis2-duotone",
	});
}

export default Component;
