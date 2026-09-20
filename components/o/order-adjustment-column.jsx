import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfo7wmb5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfo7wmb5y"/>`,
		"fallback": "tdesign:order-adjustment-column",
	});
}

export default Component;
