import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m1ha_-7me.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m1ha_-7me"/>`,
		"fallback": "dinkie-icons:keycap-eleven",
	});
}

export default Component;
