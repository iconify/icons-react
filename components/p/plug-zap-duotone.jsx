import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tnbdi8n3b.css';
import '../../css/i/i6u14jbud.css';
import '../../css/s/s8riu9c1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tnbdi8n3b"/><path class="i6u14jbud"/><path class="s8riu9c1v"/></g>`,
		"fallback": "lucide-extended:plug-zap-duotone",
	});
}

export default Component;
