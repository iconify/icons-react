import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zs7_t6bwx.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zs7_t6bwx"/>`,
		"fallback": "codicon:shield-compact",
	});
}

export default Component;
