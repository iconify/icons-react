import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yxo5hhbcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yxo5hhbcu"/>`,
		"fallback": "tabler:topology-full",
	});
}

export default Component;
