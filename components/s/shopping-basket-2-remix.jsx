import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_v2-7tnm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t_v2-7tnm"/>`,
		"fallback": "streamline-flex:shopping-basket-2-remix",
	});
}

export default Component;
