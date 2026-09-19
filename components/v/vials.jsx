import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dxn4-qbhs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dxn4-qbhs"/>`,
		"fallback": "fa6-solid:vials",
	});
}

export default Component;
