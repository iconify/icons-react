import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/g/g7vsu8gjq.css';
import '../../css/e/e-cfrqb0c.css';
import '../../css/n/nwp06vpfo.css';
import '../../css/k/kttgb7bkk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="g7vsu8gjq wm-shadow"/><path class="e-cfrqb0c wm-shadow"/><path class="nwp06vpfo"/><path class="kttgb7bkk"/></g>`,
		"fallback": "withicons-brutal:monitor",
	});
}

export default Component;
