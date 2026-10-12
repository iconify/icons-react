import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kdck7fbvx.css';
import '../../css/w/wu39-wb9l.css';
import '../../css/c/ci0437b9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kdck7fbvx"/><path class="wu39-wb9l"/><path class="ci0437b9m"/></g>`,
		"fallback": "lucide-extended:shield-keyhole-duotone",
	});
}

export default Component;
