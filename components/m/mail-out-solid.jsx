import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/b/bil7h4hxb.css';
import '../../css/k/k0v0v9boq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="bil7h4hxb"/><path clip-rule="evenodd" class="k0v0v9boq"/></g>`,
		"fallback": "iconoir:mail-out-solid",
	});
}

export default Component;
