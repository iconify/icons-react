import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xc3p1bcrw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xc3p1bcrw"/>`,
		"fallback": "noviair-light:pills",
	});
}

export default Component;
