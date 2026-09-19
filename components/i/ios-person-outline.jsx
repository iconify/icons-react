import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xsit_hb8q.css';
import '../../css/k/kdqm06bos.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xsit_hb8q"/><path class="kdqm06bos"/>`,
		"fallback": "ion:ios-person-outline",
	});
}

export default Component;
