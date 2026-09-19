import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/l4ahjrb2f.css';
import '../../css/c/cb333fqxl.css';
import '../../css/i/i1daf0olr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="l4ahjrb2f"/><path class="cb333fqxl"/><path class="i1daf0olr"/></g>`,
		"fallback": "hugeicons:security",
	});
}

export default Component;
