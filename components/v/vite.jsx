import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qb8e2pbvs.css';
import '../../css/a/a6q6jbntf.css';
import '../../css/a/avibf5j5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qb8e2pbvs"/><path class="a6q6jbntf"/><path class="avibf5j5z"/>`,
		"fallback": "lineicons:vite",
	});
}

export default Component;
