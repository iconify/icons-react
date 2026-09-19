import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1tvijimu.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w1tvijimu"/>`,
		"fallback": "dinkie-icons:location-pin-small",
	});
}

export default Component;
