import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wjgcx4_5w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wjgcx4_5w"/>`,
		"fallback": "la:map-pin-solid",
	});
}

export default Component;
