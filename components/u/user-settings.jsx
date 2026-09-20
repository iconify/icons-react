import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wv_j0tbdn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wv_j0tbdn"/>`,
		"fallback": "ix:user-settings",
	});
}

export default Component;
