import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lfwn9qb7o.css';
import '../../css/o/o0l6usxvj.css';
import '../../css/g/ghf43lb4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="lfwn9qb7o"/><path clip-rule="evenodd" class="o0l6usxvj"/><path class="ghf43lb4p"/></g>`,
		"fallback": "lets-icons:user-add",
	});
}

export default Component;
