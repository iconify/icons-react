import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y2uxy2bbj.css';
import '../../css/q/qoy9edcng.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y2uxy2bbj"/><path class="qoy9edcng"/></g>`,
		"fallback": "bi:nvme-fill",
	});
}

export default Component;
