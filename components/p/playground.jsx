import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/kpztr_byj.css';
import '../../css/y/yymzgdsqa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="kpztr_byj"/><path class="yymzgdsqa"/></g>`,
		"fallback": "withicons-bauhaus:playground",
	});
}

export default Component;
