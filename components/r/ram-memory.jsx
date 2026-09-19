import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ecloo0f7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ecloo0f7h"/>`,
		"fallback": "hugeicons:ram-memory",
	});
}

export default Component;
