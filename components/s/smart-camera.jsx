import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g91-cs_7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g91-cs_7o"/>`,
		"fallback": "cbi:smart-camera",
	});
}

export default Component;
