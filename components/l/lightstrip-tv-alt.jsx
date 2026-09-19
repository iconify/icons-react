import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfwb_gbtf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfwb_gbtf"/>`,
		"fallback": "cbi:lightstrip-tv-alt",
	});
}

export default Component;
