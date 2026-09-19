import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwr_ovbip.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hwr_ovbip"/>`,
		"fallback": "f7:moon-zzz-fill",
	});
}

export default Component;
