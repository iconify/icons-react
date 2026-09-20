import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnyw7hb_i.css';
import '../../css/o/opjoz-b-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bnyw7hb_i"/><path class="opjoz-b-i"/>`,
		"fallback": "uim:vector-square",
	});
}

export default Component;
