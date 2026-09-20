import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3xprjw7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t3xprjw7v"/>`,
		"fallback": "streamline-ultimate:polygon-lasso-bold",
	});
}

export default Component;
