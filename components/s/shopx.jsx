import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ks-o0gc_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ks-o0gc_d"/>`,
		"fallback": "token:shopx",
	});
}

export default Component;
