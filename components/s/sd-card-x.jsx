import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a837ezqac.css';
import '../../css/i/isnwf4bxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a837ezqac"/><path class="isnwf4bxo"/></g>`,
		"fallback": "andrsrxn:sd-card-x",
	});
}

export default Component;
