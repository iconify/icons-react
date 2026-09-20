import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/y/yw358mt-u.css';
import '../../css/p/pq1v23z4w.css';
import '../../css/c/cguy5pnci.css';
import '../../css/p/pg91jeirf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="yw358mt-u"/><path class="pq1v23z4w"/><path class="cguy5pnci"/><path class="pg91jeirf"/></g>`,
		"fallback": "streamline-plump-color:text-box-1",
	});
}

export default Component;
