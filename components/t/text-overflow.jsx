import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bo0x7ob7m.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bo0x7ob7m"/>`,
		"fallback": "pullo:text-overflow",
	});
}

export default Component;
