import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/edre0ebcq.css';
import '../../css/n/n3vcm3bks.css';
import '../../css/v/v2ly-gb0l.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="edre0ebcq"/><path class="n3vcm3bks"/><path class="v2ly-gb0l"/></g>`,
		"fallback": "streamline-color:milkshake",
	});
}

export default Component;
