import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/icoec9b7o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="icoec9b7o"/>`,
		"fallback": "streamline-flex:shopping-basket-2",
	});
}

export default Component;
