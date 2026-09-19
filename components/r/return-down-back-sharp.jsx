import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e0jdfibba.css';
import '../../css/o/oidh77b1b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e0jdfibba"/><path class="oidh77b1b"/>`,
		"fallback": "famicons:return-down-back-sharp",
	});
}

export default Component;
