import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dsaaqfdod.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dsaaqfdod"/>`,
		"fallback": "noviair:phone-off",
	});
}

export default Component;
