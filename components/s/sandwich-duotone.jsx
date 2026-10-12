import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aqw04ybjf.css';
import '../../css/p/p9tuqtbsa.css';
import '../../css/o/o_079obux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aqw04ybjf"/><path class="p9tuqtbsa"/><path class="o_079obux"/></g>`,
		"fallback": "lucide-extended:sandwich-duotone",
	});
}

export default Component;
