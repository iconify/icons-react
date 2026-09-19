import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wgy8ghb7i.css';
import '../../css/q/qvzx70gnh.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="wgy8ghb7i"/><path class="qvzx70gnh"/></g>`,
		"fallback": "cryptocurrency-color:mzc",
	});
}

export default Component;
