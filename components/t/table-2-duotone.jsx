import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q92-ghbcb.css';
import '../../css/j/jg0802bwo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q92-ghbcb"/><path class="jg0802bwo"/></g>`,
		"fallback": "lucide-extended:table-2-duotone",
	});
}

export default Component;
