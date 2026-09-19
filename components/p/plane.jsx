import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/txdar5bff.css';
import '../../css/u/u8f2-wohm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="txdar5bff"/><path class="u8f2-wohm"/></g>`,
		"fallback": "hugeicons:plane",
	});
}

export default Component;
