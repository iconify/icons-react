import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p0a4uybiy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p0a4uybiy"/>`,
		"fallback": "noviair:lock",
	});
}

export default Component;
