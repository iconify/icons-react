import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/okwnt7b1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="okwnt7b1i"/>`,
		"fallback": "noviair-light:route-clock",
	});
}

export default Component;
