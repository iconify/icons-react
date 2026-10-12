import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i6uzpybyf.css';
import '../../css/p/phm_mqkqd.css';
import '../../css/w/w6pvigl7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i6uzpybyf"/><path class="phm_mqkqd"/><path class="w6pvigl7t"/></g>`,
		"fallback": "lucide-extended:radio-receiver-duotone",
	});
}

export default Component;
