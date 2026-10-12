import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cded_ir1q.css';
import '../../css/n/nb9d1ibpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cded_ir1q"/><path class="nb9d1ibpa"/></g>`,
		"fallback": "lucide-extended:octagon-pause-duotone",
	});
}

export default Component;
