import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qx2i2kbdf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qx2i2kbdf"/>`,
		"fallback": "hugeicons:layer-bring-forward",
	});
}

export default Component;
