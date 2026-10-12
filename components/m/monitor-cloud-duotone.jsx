import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ijmo84y7j.css';
import '../../css/u/uzmwkhbts.css';
import '../../css/z/zb2v6-b5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ijmo84y7j"/><path class="uzmwkhbts"/><path clip-rule="evenodd" class="zb2v6-b5q"/></g>`,
		"fallback": "lucide-extended:monitor-cloud-duotone",
	});
}

export default Component;
