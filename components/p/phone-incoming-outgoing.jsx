import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bvg_hlu3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bvg_hlu3m"/>`,
		"fallback": "mdi:phone-incoming-outgoing",
	});
}

export default Component;
