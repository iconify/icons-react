import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dh_r0wb4w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dh_r0wb4w"/>`,
		"fallback": "cib:playstation",
	});
}

export default Component;
