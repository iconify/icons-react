import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gtt0c5_0k.css';
import '../../css/o/o45e4rbgi.css';
import '../../css/o/oor0nsbag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="gtt0c5_0k"/><rect class="o45e4rbgi"/><path class="oor0nsbag"/></g>`,
		"fallback": "andrsrxn:panels-end",
	});
}

export default Component;
