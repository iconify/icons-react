import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kim2b958d.css';
import '../../css/v/v4gs9b0ny.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="kim2b958d"/><path class="v4gs9b0ny"/></g>`,
		"fallback": "cryptocurrency-color:veri",
	});
}

export default Component;
