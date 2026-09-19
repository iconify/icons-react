import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ov1mv-sfv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ov1mv-sfv"/>`,
		"fallback": "fa6-solid:tower-observation",
	});
}

export default Component;
