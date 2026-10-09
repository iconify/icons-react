import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aghjl2bmp.css';
import '../../css/i/ic8mjabnv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aghjl2bmp"/><path class="ic8mjabnv"/>`,
		"fallback": "energy-icons:mountain-snow-20-bold",
	});
}

export default Component;
