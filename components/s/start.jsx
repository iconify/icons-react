import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jj90reb4p.css';
import '../../css/c/con0wjbli.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="jj90reb4p"/><path class="con0wjbli"/></g>`,
		"fallback": "cryptocurrency-color:start",
	});
}

export default Component;
