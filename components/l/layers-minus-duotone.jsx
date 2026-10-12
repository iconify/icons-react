import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uiqpg-b4m.css';
import '../../css/r/rt3fdztit.css';
import '../../css/y/ycnuff8oa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="uiqpg-b4m"/><path class="rt3fdztit"/><path class="ycnuff8oa"/></g>`,
		"fallback": "lucide-extended:layers-minus-duotone",
	});
}

export default Component;
