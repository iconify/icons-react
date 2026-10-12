import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lzefeccxc.css';
import '../../css/r/rdiii1zos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lzefeccxc"/><path class="rdiii1zos"/></g>`,
		"fallback": "andrsrxn:playing-clubs",
	});
}

export default Component;
