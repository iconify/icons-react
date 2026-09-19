import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dhd3tibki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dhd3tibki"/>`,
		"fallback": "boxicons:split",
	});
}

export default Component;
