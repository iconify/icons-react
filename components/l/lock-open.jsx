import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xj90n0u7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xj90n0u7a"/>`,
		"fallback": "heroicons:lock-open",
	});
}

export default Component;
