import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w2psbab_h.css';
import '../../css/h/hgyedcvco.css';
import '../../css/t/tkh4o4h-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w2psbab_h"/><path class="hgyedcvco"/><path clip-rule="evenodd" class="tkh4o4h-x"/></g>`,
		"fallback": "lucide-extended:school-duotone",
	});
}

export default Component;
