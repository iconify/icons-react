import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oemvd_byo.css';
import '../../css/x/x8rurvb8y.css';
import '../../css/z/zy0239y8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oemvd_byo"/><path class="x8rurvb8y"/><path class="zy0239y8o"/></g>`,
		"fallback": "lucide-extended:notepad-text-duotone",
	});
}

export default Component;
