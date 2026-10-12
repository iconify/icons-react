import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pcfpawbqq.css';
import '../../css/n/nb9d1ibpa.css';
import '../../css/a/ai741630p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pcfpawbqq"/><path class="nb9d1ibpa"/><path class="ai741630p"/></g>`,
		"fallback": "lucide-extended:octagon-minus-duotone",
	});
}

export default Component;
