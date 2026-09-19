import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/memx0ebgv.css';

const viewBox = {"width":304,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="memx0ebgv"/>`,
		"fallback": "ps:iphone",
	});
}

export default Component;
