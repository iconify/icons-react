import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/uqn2-j0xl.css';
import '../../css/c/cjdr9qbdm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="uqn2-j0xl"/><path class="cjdr9qbdm"/></g>`,
		"fallback": "hugeicons:sujood",
	});
}

export default Component;
