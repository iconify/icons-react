import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zx4asvbkn.css';
import '../../css/x/x9kjoyb1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zx4asvbkn"/><path class="x9kjoyb1l"/>`,
		"fallback": "lineicons:quora",
	});
}

export default Component;
