import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bl1d0s49v.css';
import '../../css/i/ictwwwp8x.css';
import '../../css/c/c2rntjb-m.css';
import '../../css/k/k0_w5cj4m.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bl1d0s49v"/><path class="ictwwwp8x"/><path class="c2rntjb-m"/><circle class="k0_w5cj4m"/>`,
		"fallback": "flag:ne-4x3",
	});
}

export default Component;
