import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/x/xxifuqbob.css';
import '../../css/l/lcfnqzkei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="xxifuqbob"/><circle class="lcfnqzkei"/></g>`,
		"fallback": "lets-icons:user-scan",
	});
}

export default Component;
