import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zkqv8i9di.css';
import '../../css/p/p-y0ptmfr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zkqv8i9di"/><path class="p-y0ptmfr"/></g>`,
		"fallback": "reicon:shield-search",
	});
}

export default Component;
