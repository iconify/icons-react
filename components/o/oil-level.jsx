import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvi5y0blc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvi5y0blc"/>`,
		"fallback": "mdi:oil-level",
	});
}

export default Component;
