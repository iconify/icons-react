import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kz_9l1y1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kz_9l1y1x"/>`,
		"fallback": "noviair:tabs-x",
	});
}

export default Component;
