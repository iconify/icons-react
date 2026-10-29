import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dkzn43b3q.css';
import '../../css/u/ug855dh8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="dkzn43b3q"/><path class="ug855dh8y wm-s"/></g>`,
		"fallback": "withicons:poinsettia-solid",
	});
}

export default Component;
