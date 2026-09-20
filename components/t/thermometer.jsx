import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lswb97b9a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lswb97b9a"/>`,
		"fallback": "zondicons:thermometer",
	});
}

export default Component;
