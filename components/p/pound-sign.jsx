import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a2u-wxb2m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a2u-wxb2m"/>`,
		"fallback": "icon-park-outline:pound-sign",
	});
}

export default Component;
