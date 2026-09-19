import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/q/q57wo7xye.css';
import '../../css/d/dob4foomc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="q57wo7xye"/><path class="dob4foomc"/></g>`,
		"fallback": "cryptocurrency-color:rlc",
	});
}

export default Component;
