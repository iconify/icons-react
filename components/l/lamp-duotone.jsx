import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i2l4h2f1f.css';
import '../../css/n/ne2-onb3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i2l4h2f1f"/><path class="ne2-onb3z"/></g>`,
		"fallback": "lucide-extended:lamp-duotone",
	});
}

export default Component;
