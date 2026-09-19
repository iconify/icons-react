import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwft3nb8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vwft3nb8k"/>`,
		"fallback": "heroicons:user-circle",
	});
}

export default Component;
