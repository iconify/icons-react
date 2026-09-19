import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5xaqcc6m.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m5xaqcc6m"/>`,
		"fallback": "dinkie-icons:u1fae5",
	});
}

export default Component;
