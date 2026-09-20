import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bt_flyf0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bt_flyf0t"/>`,
		"fallback": "mdi:pause-octagon-outline",
	});
}

export default Component;
