import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jmn1ypb6h.css';
import '../../css/z/z033f7bce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jmn1ypb6h"/><path class="z033f7bce"/></g>`,
		"fallback": "hugeicons:printer-x",
	});
}

export default Component;
