import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gr_iggcno.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gr_iggcno"/>`,
		"fallback": "wi:owm-night-300",
	});
}

export default Component;
