import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/ho43c-7-s.css';
import '../../css/t/t_5yjbc4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ho43c-7-s"/><path class="t_5yjbc4c"/></g>`,
		"fallback": "lucide-extended:virus-duotone",
	});
}

export default Component;
