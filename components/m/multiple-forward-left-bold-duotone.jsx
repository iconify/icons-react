import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2ybt1sxt.css';
import '../../css/s/st7xg9lhb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d2ybt1sxt"/><path clip-rule="evenodd" class="st7xg9lhb"/>`,
		"fallback": "solar:multiple-forward-left-bold-duotone",
	});
}

export default Component;
