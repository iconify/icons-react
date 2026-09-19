import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/efp6-abvq.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="efp6-abvq"/>`,
		"fallback": "fa-solid:mouse-pointer",
	});
}

export default Component;
