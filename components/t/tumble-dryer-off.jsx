import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lk2xr949v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lk2xr949v"/>`,
		"fallback": "mdi:tumble-dryer-off",
	});
}

export default Component;
