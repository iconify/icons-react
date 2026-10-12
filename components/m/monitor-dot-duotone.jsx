import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wi2wsor9s.css';
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
		"content": `<g class="ft5dv1b6b"><path class="wi2wsor9s"/><path class="cfupnld-v"/><path class="wde-mrlcg"/></g>`,
		"fallback": "lucide-extended:monitor-dot-duotone",
	});
}

export default Component;
