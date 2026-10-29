import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/x-p4m3puv.css';
import '../../css/s/szd75cbmw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="x-p4m3puv"/><path class="szd75cbmw wm-a"/></g>`,
		"fallback": "withicons:table-of-contents",
	});
}

export default Component;
