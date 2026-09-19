import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/y/ybzfri8sn.css';
import '../../css/q/q10c8qqak.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="ybzfri8sn"/><path class="q10c8qqak"/></g>`,
		"fallback": "bitcoin-icons:refresh-outline",
	});
}

export default Component;
