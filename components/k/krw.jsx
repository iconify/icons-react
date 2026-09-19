import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lc78ikbou.css';

const viewBox = {"width":31,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lc78ikbou"/>`,
		"fallback": "fontisto:krw",
	});
}

export default Component;
