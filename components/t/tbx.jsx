import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/irlvmvbvm.css';
import '../../css/r/r2qf-1bgp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="irlvmvbvm"/><path class="r2qf-1bgp"/></g>`,
		"fallback": "cryptocurrency-color:tbx",
	});
}

export default Component;
