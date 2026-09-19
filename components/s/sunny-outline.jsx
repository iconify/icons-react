import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzoe01kfd.css';
import '../../css/q/qdd1rtb9m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzoe01kfd"/><circle class="qdd1rtb9m"/>`,
		"fallback": "ion:sunny-outline",
	});
}

export default Component;
