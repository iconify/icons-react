import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tqft92biu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tqft92biu"/>`,
		"fallback": "uil:key-skeleton-alt",
	});
}

export default Component;
