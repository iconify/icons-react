import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sc21p692x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sc21p692x"/>`,
		"fallback": "mingcute:map-2-fill",
	});
}

export default Component;
