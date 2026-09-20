import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glpy9wu7t.css';
import '../../css/t/tr_qzvbuu.css';
import '../../css/f/fd6xyabdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="glpy9wu7t"><path class="tr_qzvbuu"/><circle class="fd6xyabdl"/></g>`,
		"fallback": "lets-icons:lable-duotone",
	});
}

export default Component;
