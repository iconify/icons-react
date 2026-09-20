import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fupcqnb1q.css';
import '../../css/r/r8xx6k20f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="fupcqnb1q"/><path class="r8xx6k20f"/></g>`,
		"fallback": "streamline-color:keyboard-virtual-flat",
	});
}

export default Component;
