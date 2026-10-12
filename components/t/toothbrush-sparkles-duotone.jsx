import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b-hk8lb4a.css';
import '../../css/c/c2fl7fuew.css';
import '../../css/y/yz1489b0v.css';
import '../../css/m/mg3qx2mkd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b-hk8lb4a"/><path class="c2fl7fuew"/><path class="yz1489b0v"/><path class="mg3qx2mkd"/></g>`,
		"fallback": "lucide-extended:toothbrush-sparkles-duotone",
	});
}

export default Component;
