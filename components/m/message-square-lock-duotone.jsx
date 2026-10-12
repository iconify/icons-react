import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pjb3sybwq.css';
import '../../css/p/py2pseb_g.css';
import '../../css/b/bully7omt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pjb3sybwq"/><path class="py2pseb_g"/><path class="bully7omt"/></g>`,
		"fallback": "lucide-extended:message-square-lock-duotone",
	});
}

export default Component;
