import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/swny0lthw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="swny0lthw"/>`,
		"fallback": "gridicons:pencil",
	});
}

export default Component;
