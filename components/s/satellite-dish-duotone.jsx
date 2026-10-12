import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/flxn7o3ta.css';
import '../../css/o/ohv1qhbhs.css';
import '../../css/l/lopzz-bpw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="flxn7o3ta"/><path class="ohv1qhbhs"/><path class="lopzz-bpw"/></g>`,
		"fallback": "lucide-extended:satellite-dish-duotone",
	});
}

export default Component;
