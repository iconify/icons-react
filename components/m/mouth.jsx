import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/ge79iwb4t.css';
import '../../css/k/kv53nwg5o.css';
import '../../css/y/y885u17nu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ge79iwb4t"/><path class="kv53nwg5o"/><path class="y885u17nu"/></g>`,
		"fallback": "andrsrxn:mouth",
	});
}

export default Component;
