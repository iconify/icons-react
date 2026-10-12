import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pr317i25u.css';
import '../../css/l/lazq1ab7l.css';
import '../../css/e/em-eh2bsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pr317i25u"/><path class="lazq1ab7l"/><path class="em-eh2bsd"/></g>`,
		"fallback": "lucide-extended:messages-square-duotone",
	});
}

export default Component;
