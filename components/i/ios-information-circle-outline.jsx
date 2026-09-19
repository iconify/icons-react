import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gdowcxbbg.css';
import '../../css/l/lalksfbhk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gdowcxbbg"/><path class="lalksfbhk"/>`,
		"fallback": "ion:ios-information-circle-outline",
	});
}

export default Component;
