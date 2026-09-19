import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/a/a1lbtofvp.css';
import '../../css/a/aos5h-flq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="a1lbtofvp"/><path class="aos5h-flq"/></g>`,
		"fallback": "flowbite:undo-solid",
	});
}

export default Component;
