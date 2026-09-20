import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gq95s7sjx.css';
import '../../css/g/gpq-8xbgl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gq95s7sjx"/><path class="gpq-8xbgl"/>`,
		"fallback": "streamline-freehand:shopping-bag-duty-free",
	});
}

export default Component;
