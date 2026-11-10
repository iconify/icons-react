import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/echeipybo.css';
import '../../css/j/jkwzz4bty.css';
import '../../css/f/f1thgn02f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="echeipybo"/><path class="jkwzz4bty"/><path class="f1thgn02f"/></g>`,
		"fallback": "andrsrxn:parking-off",
	});
}

export default Component;
