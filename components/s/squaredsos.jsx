import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyr2jybbi.css';
import '../../css/c/cu-wwpbhr.css';
import '../../css/k/ky8qmjbbp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cyr2jybbi"/><path class="cu-wwpbhr"/><path class="ky8qmjbbp"/>`,
		"fallback": "fxemoji:squaredsos",
	});
}

export default Component;
