import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nge32vmzt.css';
import '../../css/n/nic302jho.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nge32vmzt"/><path class="nic302jho"/>`,
		"fallback": "stash:target-light",
	});
}

export default Component;
