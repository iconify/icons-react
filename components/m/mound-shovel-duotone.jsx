import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m2ti0vg3b.css';
import '../../css/o/ohspjicop.css';
import '../../css/b/b9v1544fi.css';
import '../../css/k/k9k_yyryx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m2ti0vg3b"/><path class="ohspjicop"/><path class="b9v1544fi"/><path class="k9k_yyryx"/></g>`,
		"fallback": "lucide-extended:mound-shovel-duotone",
	});
}

export default Component;
