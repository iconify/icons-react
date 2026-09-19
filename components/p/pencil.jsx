import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/z5c4ebcrr.css';
import '../../css/t/tk1ferbdb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="z5c4ebcrr"/><path class="tk1ferbdb"/></g>`,
		"fallback": "hugeicons:pencil",
	});
}

export default Component;
