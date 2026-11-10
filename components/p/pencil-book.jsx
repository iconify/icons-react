import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kbqxig0ur.css';
import '../../css/b/b2fdlxkov.css';
import '../../css/b/bb0efjq9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kbqxig0ur"/><path class="b2fdlxkov"/><path class="bb0efjq9a"/></g>`,
		"fallback": "andrsrxn:pencil-book",
	});
}

export default Component;
