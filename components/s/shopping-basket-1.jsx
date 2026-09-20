import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/umstz1wku.css';
import '../../css/v/v43vo_b9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="umstz1wku"/><path class="v43vo_b9l"/>`,
		"fallback": "streamline-freehand:shopping-basket-1",
	});
}

export default Component;
