import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwdtidf8z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hwdtidf8z"/>`,
		"fallback": "selfhst:stencilbox-dark",
	});
}

export default Component;
