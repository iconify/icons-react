import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/du3s13z_f.css';
import '../../css/t/tv8n5ab9s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="du3s13z_f"/><path class="tv8n5ab9s"/></g>`,
		"fallback": "andrsrxn:skip-forward",
	});
}

export default Component;
