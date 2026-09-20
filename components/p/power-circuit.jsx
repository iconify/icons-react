import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gngkh0_1d.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gngkh0_1d"/>`,
		"fallback": "temaki:power-circuit",
	});
}

export default Component;
