import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/e5etnbbyw.css';
import '../../css/b/bfp06b55b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="e5etnbbyw"/><path class="bfp06b55b"/></g>`,
		"fallback": "hugeicons:tap-01",
	});
}

export default Component;
