import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/eklwh2bjd.css';
import '../../css/i/i9c7f6brn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="eklwh2bjd"/><path class="i9c7f6brn"/></g>`,
		"fallback": "hugeicons:shorts-pants",
	});
}

export default Component;
