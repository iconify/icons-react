import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pveqmkqcn.css';
import '../../css/b/bovbhybjc.css';
import '../../css/c/cnxo92gjx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pveqmkqcn"/><path class="bovbhybjc"/><path class="cnxo92gjx"/></g>`,
		"fallback": "lucide-extended:mouth-duotone",
	});
}

export default Component;
