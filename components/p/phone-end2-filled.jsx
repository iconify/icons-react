import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m4ha_dcsj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m4ha_dcsj"/>`,
		"fallback": "reicon:phone-end2-filled",
	});
}

export default Component;
