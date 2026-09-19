import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nvk93ab1t.css';
import '../../css/l/lalksfbhk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nvk93ab1t"/><path class="lalksfbhk"/>`,
		"fallback": "ion:ios-checkmark-circle-outline",
	});
}

export default Component;
