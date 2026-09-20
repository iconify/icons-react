import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxu1l1pmq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxu1l1pmq"/>`,
		"fallback": "tdesign:system-2",
	});
}

export default Component;
