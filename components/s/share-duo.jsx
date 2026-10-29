import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/ksvnf8b0v.css';
import '../../css/p/p7fropb0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ksvnf8b0v"/><path class="p7fropb0k"/></g>`,
		"fallback": "withicons:share-duo",
	});
}

export default Component;
