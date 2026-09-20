import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/z/zx3c59bla.css';
import '../../css/r/r35ut50dp.css';
import '../../css/x/x6azqpbbl.css';
import '../../css/x/x4eme2b-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="zx3c59bla"/><path class="r35ut50dp"/><path class="x6azqpbbl"/><path class="x4eme2b-x"/></g>`,
		"fallback": "lets-icons:print-light",
	});
}

export default Component;
