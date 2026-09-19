import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b6gjduvod.css';
import '../../css/c/cscg8-bbg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="b6gjduvod"/><path class="cscg8-bbg"/></g>`,
		"fallback": "cryptocurrency-color:part",
	});
}

export default Component;
