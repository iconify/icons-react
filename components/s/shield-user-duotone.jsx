import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c413qfd-x.css';
import '../../css/k/kdck7fbvx.css';
import '../../css/g/g3fmatb8b.css';
import '../../css/r/rgggbcbui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="c413qfd-x"/><path class="kdck7fbvx"/><path class="g3fmatb8b"/><path class="rgggbcbui"/></g>`,
		"fallback": "lucide-extended:shield-user-duotone",
	});
}

export default Component;
