import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wh_vbsbou.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wh_vbsbou"/>`,
		"fallback": "academicons:protocols",
	});
}

export default Component;
