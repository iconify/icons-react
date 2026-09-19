import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbv87hbui.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lbv87hbui"/>`,
		"fallback": "fa-solid:satellite",
	});
}

export default Component;
