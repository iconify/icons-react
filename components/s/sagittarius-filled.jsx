import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cn7zcibyf.css';
import '../../css/b/bpmf_kbju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cn7zcibyf"/><path class="bpmf_kbju"/></g>`,
		"fallback": "reicon:sagittarius-filled",
	});
}

export default Component;
