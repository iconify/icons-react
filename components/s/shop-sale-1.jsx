import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c796d29xi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c796d29xi"/>`,
		"fallback": "streamline-ultimate:shop-sale-1",
	});
}

export default Component;
