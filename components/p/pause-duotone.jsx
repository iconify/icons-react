import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uatgr9b8q.css';
import '../../css/a/apyuho6es.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uatgr9b8q"/><path class="apyuho6es"/></g>`,
		"fallback": "lucide-extended:pause-duotone",
	});
}

export default Component;
