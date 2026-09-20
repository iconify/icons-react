import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a-tiuxvdv.css';
import '../../css/o/ousb7cb3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a-tiuxvdv"/><path class="ousb7cb3z"/>`,
		"fallback": "streamline-ultimate:public-service-firefighter-truck-1-bold",
	});
}

export default Component;
