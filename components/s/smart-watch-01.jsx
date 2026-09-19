import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/v90gbqbox.css';
import '../../css/z/zxm27fb9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="v90gbqbox"/><path class="zxm27fb9a"/></g>`,
		"fallback": "hugeicons:smart-watch-01",
	});
}

export default Component;
