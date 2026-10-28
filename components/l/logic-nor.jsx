import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t_fcihbmd.css';
import '../../css/s/shp5kj6-r.css';
import '../../css/j/jpordbbij.css';
import '../../css/w/w9su38bli.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="t_fcihbmd"/><path class="shp5kj6-r"/><circle class="jpordbbij"/><circle class="w9su38bli"/></g>`,
		"fallback": "andrsrxn:logic-nor",
	});
}

export default Component;
