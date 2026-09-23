import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/u/u75rk3mdx.css';
import '../../css/b/bkuyfq66o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="u75rk3mdx"/><path class="bkuyfq66o"/></g>`,
		"fallback": "meteor-icons:meteor",
	});
}

export default Component;
