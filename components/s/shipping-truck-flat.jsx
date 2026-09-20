import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/i/if7myabao.css';
import '../../css/r/r09lthb1x.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="if7myabao"/><path class="r09lthb1x"/></g>`,
		"fallback": "streamline-color:shipping-truck-flat",
	});
}

export default Component;
