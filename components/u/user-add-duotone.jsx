import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i7s8v2b0y.css';
import '../../css/c/czb0pkb7h.css';
import '../../css/c/ca4gnv9xj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="i7s8v2b0y"/><path clip-rule="evenodd" class="czb0pkb7h"/><path class="ca4gnv9xj"/></g>`,
		"fallback": "lets-icons:user-add-duotone",
	});
}

export default Component;
