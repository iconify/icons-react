import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n5x9gab4i.css';
import '../../css/n/n9gzt1b8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n5x9gab4i"/><path class="n9gzt1b8l"/></g>`,
		"fallback": "andrsrxn:tree-view-folders",
	});
}

export default Component;
