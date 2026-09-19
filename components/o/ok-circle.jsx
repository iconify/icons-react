import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ry5blwf-m.css';

const viewBox = {"width":1200,"height":1200};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ry5blwf-m"/>`,
		"fallback": "el:ok-circle",
	});
}

export default Component;
