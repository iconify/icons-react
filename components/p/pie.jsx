import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/cizd5jm2r.css';
import '../../css/l/li384bm7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="cizd5jm2r"/><path class="li384bm7a"/></g>`,
		"fallback": "hugeicons:pie",
	});
}

export default Component;
