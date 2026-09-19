import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wj71hlv2d.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wj71hlv2d"/>`,
		"fallback": "fa7-brands:sitrox",
	});
}

export default Component;
