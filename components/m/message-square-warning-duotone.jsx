import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wvo8mpb5j.css';
import '../../css/i/iym-rnbyp.css';
import '../../css/e/e-g8zfjbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wvo8mpb5j"/><path class="iym-rnbyp"/><path class="e-g8zfjbx"/></g>`,
		"fallback": "lucide-extended:message-square-warning-duotone",
	});
}

export default Component;
