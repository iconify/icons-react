import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gpagcnklg.css';
import '../../css/w/w2pia3bjx.css';
import '../../css/s/shqvfh8po.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gpagcnklg"/><path class="w2pia3bjx"/><path class="shqvfh8po"/></g>`,
		"fallback": "andrsrxn:pine-tree",
	});
}

export default Component;
