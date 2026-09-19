import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o91nh_bfw.css';
import '../../css/h/h8fdi9bup.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="o91nh_bfw"/><path class="h8fdi9bup"/>`,
		"fallback": "ion:man-sharp",
	});
}

export default Component;
