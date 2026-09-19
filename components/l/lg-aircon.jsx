import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_z5v4b0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_z5v4b0x"/>`,
		"fallback": "cbi:lg-aircon",
	});
}

export default Component;
