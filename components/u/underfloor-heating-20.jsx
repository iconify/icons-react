import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzmkpsb2f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yzmkpsb2f"/>`,
		"fallback": "energy-icons:underfloor-heating-20",
	});
}

export default Component;
