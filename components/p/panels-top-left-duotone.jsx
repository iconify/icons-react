import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/un7km_bgc.css';
import '../../css/b/bydhodbjb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="un7km_bgc"/><path class="bydhodbjb"/></g>`,
		"fallback": "lucide-extended:panels-top-left-duotone",
	});
}

export default Component;
