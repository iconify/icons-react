import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/se4hh51qv.css';
import '../../css/e/e0fc6m9hj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="se4hh51qv"/><path class="e0fc6m9hj"/>`,
		"fallback": "selfhst:networking-toolbox",
	});
}

export default Component;
