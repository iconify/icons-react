import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qbnu41b5i.css';
import '../../css/f/f_41gnb6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qbnu41b5i"/><path class="f_41gnb6s"/></g>`,
		"fallback": "reicon:scooter-duotone",
	});
}

export default Component;
