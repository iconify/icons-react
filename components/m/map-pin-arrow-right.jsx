import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxivbh2no.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxivbh2no"/>`,
		"fallback": "noviair-light:map-pin-arrow-right",
	});
}

export default Component;
