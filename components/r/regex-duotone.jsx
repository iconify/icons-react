import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s_25sua0a.css';
import '../../css/j/j5k-1cbcg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s_25sua0a"/><path class="j5k-1cbcg"/></g>`,
		"fallback": "lucide-extended:regex-duotone",
	});
}

export default Component;
