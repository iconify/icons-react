import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/npjg88byn.css';
import '../../css/k/kd3u3bcpm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="npjg88byn"/><path class="kd3u3bcpm"/></g>`,
		"fallback": "andrsrxn:table-cells-merge",
	});
}

export default Component;
