import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/x/xh4k0frjg.css';
import '../../css/z/z1klt6laq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><circle class="xh4k0frjg"/><path class="z1klt6laq"/></g>`,
		"fallback": "hugeicons:user-search-02",
	});
}

export default Component;
