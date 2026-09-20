import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ld1e0bb3t.css';
import '../../css/f/frzki349x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ld1e0bb3t"/><path clip-rule="evenodd" class="frzki349x"/>`,
		"fallback": "lets-icons:print-fill",
	});
}

export default Component;
