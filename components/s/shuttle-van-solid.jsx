import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwkp1t3mr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hwkp1t3mr"/>`,
		"fallback": "la:shuttle-van-solid",
	});
}

export default Component;
