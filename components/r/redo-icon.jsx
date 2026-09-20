import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qaz_p7cgm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qaz_p7cgm"/>`,
		"fallback": "subway:redo-icon",
	});
}

export default Component;
