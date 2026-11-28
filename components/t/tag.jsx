import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhiu4yp3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xhiu4yp3f"/>`,
		"fallback": "noviair-light:tag",
	});
}

export default Component;
