import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k0e-p7rcz.css';
import '../../css/r/rz9xmyb3y.css';
import '../../css/k/km55dfbkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k0e-p7rcz"/><path class="rz9xmyb3y"/><path class="km55dfbkl"/></g>`,
		"fallback": "lucide-extended:layout-panel-top-duotone",
	});
}

export default Component;
