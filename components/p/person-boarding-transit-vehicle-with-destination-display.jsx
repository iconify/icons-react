import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzuexowxm.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yzuexowxm"/>`,
		"fallback": "pinhead:person-boarding-transit-vehicle-with-destination-display",
	});
}

export default Component;
