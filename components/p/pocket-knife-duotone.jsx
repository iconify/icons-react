import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n9q-acbck.css';
import '../../css/o/oodbryb_h.css';
import '../../css/i/igqzibcrh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n9q-acbck"/><path class="oodbryb_h"/><path class="igqzibcrh"/></g>`,
		"fallback": "lucide-extended:pocket-knife-duotone",
	});
}

export default Component;
