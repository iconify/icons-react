import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bm7__ybvq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bm7__ybvq"/>`,
		"fallback": "noviair-light:table-plus",
	});
}

export default Component;
