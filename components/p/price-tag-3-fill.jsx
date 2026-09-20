import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xkb3agx2b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xkb3agx2b"/>`,
		"fallback": "ri:price-tag-3-fill",
	});
}

export default Component;
