import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xsk9_xzju.css';

const viewBox = {"width":50,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xsk9_xzju"/>`,
		"fallback": "thesvg-color:terraform",
	});
}

export default Component;
