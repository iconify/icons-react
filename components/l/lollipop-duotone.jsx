import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p68t-_bma.css';
import '../../css/j/jeqtdlb7k.css';
import '../../css/y/yk820acpv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p68t-_bma"/><path class="jeqtdlb7k"/><path class="yk820acpv"/></g>`,
		"fallback": "lucide-extended:lollipop-duotone",
	});
}

export default Component;
