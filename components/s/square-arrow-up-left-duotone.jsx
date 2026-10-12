import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zbipoq4ja.css';
import '../../css/s/s1a2eew1e.css';
import '../../css/s/s6te4phsj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zbipoq4ja"/><path class="s1a2eew1e"/><path class="s6te4phsj"/></g>`,
		"fallback": "lucide-extended:square-arrow-up-left-duotone",
	});
}

export default Component;
