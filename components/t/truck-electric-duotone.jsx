import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/ttwdabbfw.css';
import '../../css/e/edh-75b4r.css';
import '../../css/k/k9x2rd0gm.css';
import '../../css/y/yb7c09b3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ttwdabbfw"/><path class="edh-75b4r"/><path class="k9x2rd0gm"/><path class="yb7c09b3a"/></g>`,
		"fallback": "lucide-extended:truck-electric-duotone",
	});
}

export default Component;
