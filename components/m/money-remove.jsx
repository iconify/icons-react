import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/p/pmove9s5h.css';
import '../../css/j/jb5myo67s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="pmove9s5h"/><path class="jb5myo67s"/></g>`,
		"fallback": "reicon:money-remove",
	});
}

export default Component;
