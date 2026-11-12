import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hija0e12r.css';
import '../../css/c/ce3pv2bxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hija0e12r"/><path class="ce3pv2bxd"/></g>`,
		"fallback": "tabler:shopping-bag-cog",
	});
}

export default Component;
