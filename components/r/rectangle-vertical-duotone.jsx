import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pjch7lbxz.css';
import '../../css/s/scxs8ybpa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pjch7lbxz"/><path class="scxs8ybpa"/></g>`,
		"fallback": "lucide-extended:rectangle-vertical-duotone",
	});
}

export default Component;
