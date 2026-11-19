import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/ge79iwb4t.css';
import '../../css/t/t5dj695pw.css';
import '../../css/z/zppceo8tk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ge79iwb4t"/><path class="t5dj695pw"/><path class="zppceo8tk"/></g>`,
		"fallback": "andrsrxn:mouth-off",
	});
}

export default Component;
