import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yuikqyb3q.css';
import '../../css/l/lmlehzben.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="yuikqyb3q"/><path class="lmlehzben"/></g>`,
		"fallback": "cryptocurrency-color:mda",
	});
}

export default Component;
