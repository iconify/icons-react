import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vi0ogorip.css';
import '../../css/t/tt0hlr0zk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vi0ogorip"/><path class="tt0hlr0zk"/></g>`,
		"fallback": "lucide-extended:presentation-duotone",
	});
}

export default Component;
