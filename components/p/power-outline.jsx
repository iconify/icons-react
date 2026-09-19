import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/p/p9cid6bls.css';
import '../../css/a/a49o2flke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="p9cid6bls"/><path class="a49o2flke"/></g>`,
		"fallback": "bitcoin-icons:power-outline",
	});
}

export default Component;
