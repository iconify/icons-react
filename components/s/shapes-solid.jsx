import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qhw7fzbkl.css';
import '../../css/s/sjyiyvxyp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="qhw7fzbkl"/><path class="sjyiyvxyp wm-a"/></g>`,
		"fallback": "withicons:shapes-solid",
	});
}

export default Component;
