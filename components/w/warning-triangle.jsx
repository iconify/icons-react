import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v86opfbei.css';
import '../../css/j/jm0bi5b3t.css';
import '../../css/f/f40r78ewj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v86opfbei"/><path class="jm0bi5b3t"/><path class="f40r78ewj"/></g>`,
		"fallback": "streamline-color:warning-triangle",
	});
}

export default Component;
