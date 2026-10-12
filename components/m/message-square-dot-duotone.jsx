import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/es55_xboo.css';
import '../../css/c/cfupnld-v.css';
import '../../css/w/wde-mrlcg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="es55_xboo"/><path class="cfupnld-v"/><path class="wde-mrlcg"/></g>`,
		"fallback": "lucide-extended:message-square-dot-duotone",
	});
}

export default Component;
