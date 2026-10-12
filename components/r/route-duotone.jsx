import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r4wggfb6m.css';
import '../../css/x/xtn-lpbad.css';
import '../../css/k/kkc51l8ou.css';
import '../../css/y/y3pbk0kao.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="r4wggfb6m"/><path class="xtn-lpbad"/><path class="kkc51l8ou"/><path class="y3pbk0kao"/></g>`,
		"fallback": "lucide-extended:route-duotone",
	});
}

export default Component;
