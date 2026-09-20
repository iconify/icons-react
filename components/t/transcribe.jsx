import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vv2jnsrce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vv2jnsrce"/>`,
		"fallback": "mdi:transcribe",
	});
}

export default Component;
