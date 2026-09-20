import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wbxa1bb_z.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wbxa1bb_z"/>`,
		"fallback": "zondicons:library",
	});
}

export default Component;
