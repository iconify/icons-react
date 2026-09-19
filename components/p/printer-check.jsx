import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/j/jmn1ypb6h.css';
import '../../css/s/s662yzbls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="jmn1ypb6h"/><path class="s662yzbls"/></g>`,
		"fallback": "hugeicons:printer-check",
	});
}

export default Component;
