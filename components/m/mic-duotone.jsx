import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v1euu_nkh.css';
import '../../css/s/s930m50lb.css';
import '../../css/g/gq_3b3b8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v1euu_nkh"/><path class="s930m50lb"/><path class="gq_3b3b8t"/></g>`,
		"fallback": "lucide-extended:mic-duotone",
	});
}

export default Component;
