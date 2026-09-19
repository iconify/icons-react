import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xt3dg-b7s.css';

const viewBox = {"width":1600,"height":1280};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xt3dg-b7s"/>`,
		"fallback": "fa:twitter",
	});
}

export default Component;
