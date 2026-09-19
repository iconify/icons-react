import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/r9eexsbnf.css';
import '../../css/o/oq0cuwb-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="r9eexsbnf"/><path class="oq0cuwb-g"/></g>`,
		"fallback": "hugeicons:user-account",
	});
}

export default Component;
