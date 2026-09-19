import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lcay3q_jj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lcay3q_jj"/>`,
		"fallback": "famicons:train-outline",
	});
}

export default Component;
