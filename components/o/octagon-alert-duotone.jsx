import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ufezh3s6x.css';
import '../../css/n/nb9d1ibpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ufezh3s6x"/><path class="nb9d1ibpa"/></g>`,
		"fallback": "lucide-extended:octagon-alert-duotone",
	});
}

export default Component;
