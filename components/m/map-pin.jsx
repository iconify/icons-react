import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv0437bfy.css';

const viewBox = {"width":320,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv0437bfy"/>`,
		"fallback": "fa6-solid:map-pin",
	});
}

export default Component;
