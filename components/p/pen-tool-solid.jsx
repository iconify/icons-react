import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/o3aj0cbjz.css';
import '../../css/j/jlmi4obss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="o3aj0cbjz"/><path class="jlmi4obss wm-a"/></g>`,
		"fallback": "withicons:pen-tool-solid",
	});
}

export default Component;
