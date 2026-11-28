import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhpxstb0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhpxstb0c"/>`,
		"fallback": "noviair:pumpkin",
	});
}

export default Component;
