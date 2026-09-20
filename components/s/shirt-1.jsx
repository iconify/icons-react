import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fig7rt_5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fig7rt_5c"/>`,
		"fallback": "lineicons:shirt-1",
	});
}

export default Component;
