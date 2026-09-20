import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xqtj3ocrl.css';
import '../../css/p/pu9v-6rxs.css';
import '../../css/b/bge5wbcyq.css';
import '../../css/y/y2j1rbc4o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xqtj3ocrl"/><path class="pu9v-6rxs"/><path class="bge5wbcyq"/><path class="y2j1rbc4o"/></g>`,
		"fallback": "streamline-flex-color:watch-2",
	});
}

export default Component;
