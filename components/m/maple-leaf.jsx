import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qd7sdd_nh.css';
import '../../css/v/v8fd06b4j.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qd7sdd_nh"/><path class="v8fd06b4j"/>`,
		"fallback": "openmoji:maple-leaf",
	});
}

export default Component;
