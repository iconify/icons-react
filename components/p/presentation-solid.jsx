import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/c0il4ubsc.css';
import '../../css/n/nb6gpuiqi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="c0il4ubsc"/><path class="nb6gpuiqi wm-a"/></g>`,
		"fallback": "withicons:presentation-solid",
	});
}

export default Component;
