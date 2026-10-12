import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o0woqe51r.css';
import '../../css/u/uznjc34uv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o0woqe51r"/><path class="uznjc34uv"/></g>`,
		"fallback": "lucide-extended:tv-minimal-duotone",
	});
}

export default Component;
