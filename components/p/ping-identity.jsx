import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/k/k4cn9_4_p.css';
import '../../css/b/betwiacky.css';

const viewBox = {"width":126,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><path class="k4cn9_4_p"/><path class="betwiacky"/></g>`,
		"fallback": "thesvg-color:ping-identity",
	});
}

export default Component;
