import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zf8489bon.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zf8489bon"/>`,
		"fallback": "hugeicons:pyramid-structure-02",
	});
}

export default Component;
