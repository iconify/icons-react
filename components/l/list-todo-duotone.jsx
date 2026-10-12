import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v3zcvpbla.css';
import '../../css/j/j5efkyiyl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v3zcvpbla"/><path class="j5efkyiyl"/></g>`,
		"fallback": "lucide-extended:list-todo-duotone",
	});
}

export default Component;
