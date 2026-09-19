import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c4igsbj5s.css';
import '../../css/g/g4k14r48f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="c4igsbj5s"/><path class="g4k14r48f"/></g>`,
		"fallback": "cryptocurrency-color:pac",
	});
}

export default Component;
