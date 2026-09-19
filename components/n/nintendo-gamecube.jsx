import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tlp2d-pxf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tlp2d-pxf"/>`,
		"fallback": "cib:nintendo-gamecube",
	});
}

export default Component;
