import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlqj1lbca.css';
import '../../css/r/rs4y1qbbb.css';
import '../../css/q/q-mjd6bdk.css';
import '../../css/z/zivijmbpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-a zlqj1lbca"/><path class="rs4y1qbbb wm-k"/><path class="q-mjd6bdk wm-k"/><path class="wm-a zivijmbpx"/>`,
		"fallback": "withicons-bauhaus:shopping-basket",
	});
}

export default Component;
