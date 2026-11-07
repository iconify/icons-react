import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8vnt_j9i.css';
import '../../css/p/pxdv6ta5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8vnt_j9i"/><path class="pxdv6ta5w"/>`,
		"fallback": "solar:mirror-2-bold-duotone",
	});
}

export default Component;
