import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ean2-obmi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ean2-obmi"/>`,
		"fallback": "entypo:popup",
	});
}

export default Component;
