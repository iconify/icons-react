import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dri40rb8n.css';
import '../../css/a/avq-r-bik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dri40rb8n"/><path class="avq-r-bik"/></g>`,
		"fallback": "lucide-extended:line-dot-top-vertical-duotone",
	});
}

export default Component;
