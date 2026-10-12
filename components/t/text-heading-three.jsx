import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mdpbzkbzp.css';
import '../../css/x/xurqj-2iq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mdpbzkbzp"/><path class="xurqj-2iq"/></g>`,
		"fallback": "andrsrxn:text-heading-three",
	});
}

export default Component;
