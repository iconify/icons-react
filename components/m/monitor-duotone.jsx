import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uzmwkhbts.css';
import '../../css/y/yjlljib5h.css';
import '../../css/s/s2s7zesfv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uzmwkhbts"/><path class="yjlljib5h"/><path class="s2s7zesfv"/></g>`,
		"fallback": "lucide-extended:monitor-duotone",
	});
}

export default Component;
