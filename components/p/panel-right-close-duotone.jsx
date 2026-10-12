import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s1a2eew1e.css';
import '../../css/q/qztr0801v.css';
import '../../css/n/nxu1s2bdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s1a2eew1e"/><path class="qztr0801v"/><path class="nxu1s2bdy"/></g>`,
		"fallback": "lucide-extended:panel-right-close-duotone",
	});
}

export default Component;
