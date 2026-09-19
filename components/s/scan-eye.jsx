import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/k7rysmbfb.css';
import '../../css/o/ot72cwhlb.css';
import '../../css/z/z7n6qibgq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="k7rysmbfb"/><circle class="ot72cwhlb"/><path class="z7n6qibgq"/></g>`,
		"fallback": "hugeicons:scan-eye",
	});
}

export default Component;
