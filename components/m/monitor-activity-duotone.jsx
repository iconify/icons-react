import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ck_7agkxz.css';
import '../../css/l/lmtlhobkp.css';
import '../../css/y/yjlljib5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ck_7agkxz"/><path class="lmtlhobkp"/><path class="yjlljib5h"/></g>`,
		"fallback": "lucide-extended:monitor-activity-duotone",
	});
}

export default Component;
