import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/p8gqlabhm.css';
import '../../css/h/hb8k3n1zg.css';
import '../../css/t/t67fgabgo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="p8gqlabhm"/><path class="hb8k3n1zg"/><path class="t67fgabgo"/></g>`,
		"fallback": "evicons:restricted-access",
	});
}

export default Component;
